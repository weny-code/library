<template>
  <div class="main-container">
    <div class="desc">GBA图书管理系统</div>
    <div class="navigator-container">
      <div class="item">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }"
            ><el-link class="item-class"
              ><i class="el-icon-s-home"></i>首页</el-link
            ></el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/UserPage' }"
            ><el-link class="item-class"
              ><i class="el-icon-s-custom"></i>个人主页</el-link
            ></el-breadcrumb-item
          >
          <el-breadcrumb-item class="item-class"
            ><i class="el-icon-ship"></i>图书库</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div class="select-container">
      <div class="select">
        <div class="desc">国家</div>
        <el-select
          style="margin-left: 20px"
          v-model="value1"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="desc">类型</div>
        <el-select
          style="margin-left: 20px"
          v-model="value2"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="desc">篇幅</div>
        <el-select
          style="margin-left: 20px"
          v-model="value3"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="desc">主题</div>
        <el-select
          style="margin-left: 20px"
          v-model="value4"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="check">
        <el-button type="success">查询</el-button>
      </div>
    </div>
    <div class="search-container">
      <div class="item">
        <el-input v-model="book.bookName" placeholder="请输入关键字"></el-input>
      </div>
      <div class="search">
        <el-button type="success" round v-on:click="searchBook(book)"
          >搜索</el-button
        >
      </div>
    </div>
    <div class="show-container">
      <div class="booktable">
        <el-table v-model="tableData" :data="tableData" stripe>
          <el-table-column
            prop="bookName"
            label="书名"
            width="130"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="nation" label="国家" width="130">
          </el-table-column>
          <el-table-column prop="type" label="类型" width="130">
          </el-table-column>
          <el-table-column prop="length" label="篇幅" width="130">
          </el-table-column>
          <el-table-column prop="theme" label="主题" width="300">
          </el-table-column>
          <el-table-column prop="storeDate" label="上架时间" width="200">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="100"
            header-align="center"
          >
            <template slot-scope="scope">
              <div v-if="scope.row.status == '可借'">
                <el-button
                  type="primary"
                  round
                  v-on:click="showBook(), (dialogTableVisible = true)"
                  >借阅</el-button
                >
              </div>
              <el-dialog :visible.sync="dialogTableVisible" top="10%">
                <el-table :data="tableData">
                  <el-table-column
                    prop="name"
                    label="书名"
                    width="150"
                  ></el-table-column>
                  <el-table-column
                    prop="introduction"
                    label="简介"
                  ></el-table-column>
                </el-table>
              </el-dialog>
              <div v-if="scope.row.status == '已借'">
                <el-button type="success" disabled>已借</el-button>
              </div>
              <div v-if="scope.row.status == '无货'">
                <el-button type="info" disabled>无货</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="page-container">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout="prev, pager, next, jumper"
          :total="count"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bookroom",
  data() {
    return {
      count: null,
      book: {
        // bookId: null,
        bookName: null,
        // nation: null,
        // type: null,
        // length: null,
        // theme: null,
        // storeDate: null,
        // leftAmount: null,
        // uploadAmount: null,
        // downloadAmount: null,
        // author: null,
      },
      currentPage: 1,
      pagesize: 5,
      booklist: [],
      dialogTableVisible: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      tableData: [],
      value1: [],
      value2: [],
      value3: [],
      value4: [],
    };
  },
  methods: {
    getBookTable() {
      this.$axios
        .get("/BookByPage/" + (this.currentPage - 1))
        .then((res) => {
          this.tableData = res.data;
          // this.count = 50;
          console.log("后端初始传来的数据：" + res.data);
          console.log("有多少本书：" + this.count);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    searchBook() {
      this.$axios({
        method: "post",
        url: "/BookKeyWord",
        data: { bookName: this.book.bookName },
      })
        .then((res) => {
          this.tableData = res.data;
          console.log("传入的数据=" + JSON.stringify(this.book));
          console.log("后端关键字搜索传来的数据：" + res.data);
          // console.log("数据：" + this.$qs.stringify(this.book));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    showBook() {},
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getBookTable();
    },
    getBookCount() {
      this.$axios({
        method: "post",
        url: "/BookCount",
      })
        .then((res) => {
          this.count = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getBookTable();
    this.getBookCount();
  },
};
</script>


<style scoped>
.main-container {
  position: absolute;
  width: 100%;
}

@font-face {
  font-family: "FZZhaoMFXSJF";
  src: url("../assets/font/FZZhaoMFXSJF.TTF");
}

.main-container .desc {
  font-family: "FZQuSJW";
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 5px;
  color: cadetblue;
  margin-top: 10px;
  float: left;
  margin-left: 10px;
  cursor: default;
}

.navigator-container {
  display: flex;
  height: 50px;
  margin-top: 60px;
  align-items: center;
}

.navigator-container .item {
  margin-left: 50px;
}

.item-class {
  font-size: 20px;
  color: black;
}

.el-breadcrumb__separator {
  margin: 0 9px;
  font-weight: 700;
  color: #031436;
}

.select-container {
  margin-top: 10px;
}

.select-container .select {
  display: flex;
  width: 80%;
  margin-left: 10%;
  justify-content: space-around;
}

.select-container .desc {
  color: black;
  font-size: 30px;
  margin-top: 2px;
  margin-right: -40px;
  letter-spacing: -5px;
  font-family: "FZZhaoMFXSJF";
}

.select-container .check {
  margin-left: 73%;
  margin-top: 5px;
}

.search-container {
  margin-top: 100px;
  margin-left: 60%;
}

.search-container .item {
  width: 200px;
  margin-left: 10%;
}

.search-container .search {
  margin-top: -40px;
  margin-left: -10px;
}

.show-container {
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: center;
}

.show-container .booktable {
  width: 75%;
}

.page-container {
  margin-top: 5px;
  margin-bottom: 20px;
}

.bookinfo-container {
  margin-top: 50%;
}
</style>