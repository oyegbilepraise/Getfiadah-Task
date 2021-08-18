<template>
  <div class="mcw">
    <div class="cv">
      <div>
        <div class="row">
          <div class="col-md-12 col-12">
            <i class="fa fa-search mx-3 ml-4" aria-hidden="true"></i>
            <input
              type="text"
              class="w-75 border-0 outline-0"
              id="myInput"
              placeholder="Search...."
            />
            <span class="notifications">
              <i class="fa fa-bell mx-2" aria-hidden="true"></i>
              <i class="fa fa-question-circle mx-2" aria-hidden="true"></i>
              <i class="fa fa-user mx-2" aria-hidden="true"></i>
            </span>
            <hr />
            <div>
              <div class="d-flex" style="margin-top: -10px">
                <p class="mx-4 text-dark pay"><b>Payments</b></p>
                <!-- <span class="d-flex payment_bar">  -->
                <span class="payment_bar btn bg-white shadow btn-sm border mx-2"
                  ><i class="fas fa-filter"></i> Filter</span
                >
                <span
                  style="height: 30px"
                  class="border btn bg-white shadow btn-sm mx-2"
                  ><i class="fa fa-arrow-up" aria-hidden="true"></i>
                  Export</span
                >
                <span
                  style="height: 30px"
                  class="btn btn-primary btn-sm shadow"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i> Create
                  Payment</span
                >
                <!-- </span> -->
              </div>
            </div>
            <table  class="table mx-3" style="margin-top: -10px">
              <tbody id="myTable">
                <tr>
                  <td>All</td>
                  <td>Succeded</td>
                  <td>Refunded</td>
                  <td>Uncaptured</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td><b>AMOUNT</b></td>
                  <td></td>
                  <td><b>DESCRIPTION</b></td>
                  <td><b>CUSTOMERS</b></td>
                  <td><b>DATE</b></td>
                  <td></td>
                </tr>
                <tr v-for="item in store" :key="item">
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>USD${{ item.amount }}</td>
                  <td>
                    <span class="bg-suc p-1"
                      >{{ item.status }}
                      <i class="fa fa-check" aria-hidden="true"></i
                    ></span>
                  </td>
                  <td>{{ item.desc }}</td>
                  <td>{{ item.customer }}</td>
                  <td>{{ item.date }}</td>
                  <td>
                    <b
                      ><i class="fa fa-ellipsis-h mx-3" aria-hidden="true"></i
                    ></b>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex mx-4">
              <p class="text-dark">10 Results</p>
              <p class="prevNext border p-1 shadow bg-white rounded">
                Previous
              </p>
              <p class="mx-3 border p-1 shadow bg-white text-dark rounded">
                Next
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  computed() {
    $(document).ready(function () {
      $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    });
  },

  mounted() {
    this.store = this.$store.state.a;
  },
  data() {
    return {
      store: "",
    };
  },
  methods: {
    filter() {
      // let filter = store.find((val) => val);
    },
  },
};
</script>

<style lang="scss">
body {
  margin-top: 50px;
  background-color: #fff;
  font-family: Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 0.01em;
  color: #39464e;
  overflow-x: hidden;
}

.navbar-default {
  background-color: #fff;
  margin-left: 200px;
}

.prevNext {
  margin-left: 895px;
  // float: end;
}

/*main side bar*/
.msb {
  width: 210px;
  background-color: #f5f7f9;
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  min-height: 100%;
  overflow-y: auto;
  white-space: nowrap;
  height: 100%;
  z-index: 1;
  border-right: 1px solid #ddd;
  .navbar {
    border: none;
    margin-left: 0;
    background-color: inherit;
  }
  .navbar-header {
    width: 100%;
    padding-left: 10px;
    // border-bottom: 1px solid #e7e7e7;
    margin-bottom: 20px;
    // background: #fff;
  }
  .navbar-nav {
    .panel {
      border: 0 none;
      box-shadow: none;
      margin: 0;
      background: inherit;
    }
    li {
      display: block;
      width: 100%;
      a {
        padding: 15px;
        color: #5f5f5f;
        .glyphicon,
        .fa {
          margin-right: 8px;
        }
      }
    }
  }
  .nb {
    padding-top: 5px;
    padding-left: 10px;
    margin-bottom: 30px;
    overflow: hidden;
  }
}
ul.nv,
ul.ns {
  position: relative;
  padding: 0;
  list-style: none;
}
.nv {
  li {
    display: block;
    position: relative;

    &::before {
      clear: both;
      content: "";
      display: table;
    }
    a {
      color: #444;
      padding: 10px 25px;
      display: block;
      // vertical-align: middle;

      .ic {
        font-size: 16px;
        margin-right: 5px;
        font-weight: 300;
        display: inline-block;
      }
    }
  }
  /*ns: nav-sub*/
  .ns {
    li {
      a {
        padding: 10px 50px;
      }
    }
  }
}

/*main content wrapper*/
.mcw {
  margin-left: 200px;
  position: relative;
  min-height: 100%;
  margin-top: -50px !important;
  margin-bottom: 10px !important;
}

/*globals*/
a,
a:focus,
a:hover {
  text-decoration: none;
}

.inbox {
  .container-fluid {
    padding-left: 0;
    padding-right: 0;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }
  ul {
    li {
      list-style: none;
      a {
        display: block;
        padding: 10px 20px;
      }
    }
  }
}
.msb,
.mnb {
  animation: slidein 300ms forwards;
  transform-style: preserve-3d;
}
.mcw {
  animation: bodyslidein 300ms forwards;
  transform-style: preserve-3d;
}
body.msb-x {
  .mcw,
  .mnb {
    margin-left: 0;
    animation: bodyslideout 300ms forwards;
    transform-style: preserve-3d;
  }
  .msb {
    animation: slideout 300ms forwards;
    transform-style: preserve-3d;
  }
}
.payment_bar {
  margin-left: 650px !important;
  height: 30px !important;
}
.notifications {
  float: right;
  margin-right: 25px !important;
  color: lightgray !important;
}
.pay {
  font-size: 2em;
}

.col-12 {
  color: lightgray !important;
}

.bg-suc {
  background-color: lightgreen;
}

td {
  height: 5px !important;
}
/* Slide in animation */
@-moz-keyframes slidein {
  0% {
    left: -200px;
  }
  100% {
    left: 0;
  }
}
@-webkit-keyframes slidein {
  0% {
    left: -200px;
  }
  100% {
    left: 0;
  }
}
@keyframes slidein {
  0% {
    left: -200px;
  }
  100% {
    left: 0;
  }
}
@-moz-keyframes slideout {
  0% {
    left: 0;
  }
  100% {
    left: -200px;
  }
}
@-webkit-keyframes slideout {
  0% {
    left: 0;
  }
  100% {
    left: -200px;
  }
}
@keyframes slideout {
  0% {
    left: 0;
  }
  100% {
    left: -200px;
  }
}

@-moz-keyframes bodyslidein {
  0% {
    left: 0;
  }
  100% {
    margin-left: 200px;
  }
}
@-webkit-keyframes bodyslidein {
  0% {
    left: 0;
  }
  100% {
    left: 0;
  }
}
@keyframes bodyslidein {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 200px;
  }
}
@-moz-keyframes bodyslideout {
  0% {
    margin-left: 200px;
  }
  100% {
    margin-right: 0;
  }
}
@-webkit-keyframes bodyslideout {
  0% {
    margin-left: 200px;
  }
  100% {
    margin-left: 0;
  }
}
@keyframes bodyslideout {
  0% {
    margin-left: 200px;
  }
  100% {
    margin-left: 0;
  }
}
</style>