<template>
  <div class="cont">
    <nav class="mnb navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header"></div>
      </div>
    </nav>
    <!--msb: main sidebar-->
    <div class="msb" id="msb">
      <nav class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
          <div class="brand-wrapper">
            <!-- Brand -->
            <div class="brand-name-wrapper">
              <i class="fas fa-store bg-white rounded-circle shadow"></i> <span class="mx-3">Store name</span> <i class="fa fa-angle-down mx-4" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <!-- Main Menu -->
        <div class="side-menu-container">
          <ul class="nav navbar-nav">
            <li class="">
              <a href="#"><i class="fa fa-home"></i> <span class="mx-3">Home</span> </a>
            </li>

            <!-- Dropdown-->
            <li class="panel panel-default mt-2" id="dropdown" @click="routeToPayment">
              <a data-toggle="collapse" href="#dropdown-lvl1" class="text-primary">
                <i class="fa fa-credit-card"></i> <span class="mx-3">Payments</span>
                <span class="caret"></span>
              </a>
              <!-- Payment Dropdown -->
              <div id="dropdown-lvl1" class="">
                <div class="panel-body">
                  <ul class="nav navbar-nav mx-2">
                    <li class="mx-4 mt-2"><a href="#">Mail</a></li>
                    <li class="mx-4 mt-2"><a href="#">Calendar</a></li>
                    <li class="mx-4 mt-2"><a href="#">Ecommerce</a></li>
                    <li class="mx-4 mt-2"><a href="#">User</a></li>
                    <li class="mx-4 mt-2"><a href="#">Social</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="mt-3">
              <a href="#"> <i class="fa fa-sort-alpha-up" aria-hidden="true"></i> <span class="mx-3">Balances</span></a>
            </li>
            <li class=" mt-1">
              <a href="#"><i class="fa fa-user-circle" aria-hidden="true"></i><span class="mx-3">Customers</span></a>
            </li>
            <li class=" mt-1">
              <a href="#"><i class="fas fa-accusoft    "></i><span class="mx-3">Connected Accounts</span></a>
            </li>
            <li class=" mt-1">
              <a href="#"><i class="fa fa-diamond" aria-hidden="true"></i><span class="mx-3">Products</span></a>
            </li>
            <li class=" mt-1">
              <a href="#"><i class="fa fa-file" aria-hidden="true"></i><span class="mx-3"> Reports</span></a>
            </li>
            <li class=" mt-4">
              <a href="#"><i class="fas fa-dev"></i><span class="mx-3">Developers</span></a>
            </li>
            <li class="mt-1">
              <a href="#"><i class="fa fa-toggle-on" aria-hidden="true"></i><span class="mx-3">View test data</span></a>
            </li>
            <li class="mt-1">
              <a href="#"><i class="fa fa-cog" aria-hidden="true"></i><span class="mx-3">Settings</span></a>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </nav>
    </div>
    <div class="" v-if="!show"> 
      <p class="text-center" >DASHBOARD WORKS</p>
      <P class="text-center">Kindly click the payment</P>
    </div>
      <router-view v-if="show" />
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    (function () {
      $("#msbo").on("click", function () {
        $("body").toggleClass("msb-x");
      });
    })();

    this.store = this.$store.state.a
    
  },
  data() {
    return {
      store : '',
      show: false
    };
  },
  methods: {
    routeToPayment(){
      this.$router.push('/dashboard/payment')
      this.show = true
    }
  }
};
</script>

<style lang='scss'>
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

.prevNext{
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
.payment_bar{
  margin-left: 650px !important;
  height: 30px !important;
}
.notifications{
  float: right;
  margin-right: 25px !important;
  color: lightgray !important;
}
.pay{
  font-size: 2em;
}

.col-12{
  color: lightgray !important;
}

.bg-suc{
  background-color: lightgreen;
}

td{
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