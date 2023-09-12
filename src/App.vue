<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"


import LoaderSpinner from './components/LoaderSpinner.vue'
import SchoolDetail from '@/components/detail/SchoolDetail.vue'
import Search from '@/components/start/Search.vue'
import SchoolOverview from '@/components/start/SchoolOverview.vue'

const baseStore = useBaseStore()




</script>

<template>
  <div id="messagentWrap"  :class="baseStore.brandShortName" >  
    <div class="container-fluid p-0">

      <div v-if="baseStore.scholenAll.length < 100" class="mt-5">
          <LoaderSpinner 
              text="Even geduld" 
              spinnerColor="#F75821"
              ringColor="#efefef"
          />
      </div>

      <div v-else>

        <div v-if="baseStore.currentScreen > 0 "   class="cursor-pointer p-1 text-md  fixed-header-top brands-font-primary brands-text-color-primary ">
              
              <div v-if="!baseStore.ficheIsVisible" class="float-right text-md text-right" style="margin-top:-10px">
                {{ baseStore.chosenSchoolDetail.Naam }}<br />
                {{ baseStore.chosenSchoolDetail.Gemeente }}
              </div>


              <div  v-if="baseStore.currentScreen == 1 " @click="baseStore.currentScreen = 0 ; searchStore.userGemeenteInput = '' ">
                <i class="fa-solid fa-circle-chevron-left"></i>  <span class="text-underline">Wijzig zoekopdracht</span>
              </div>
              <div  v-if="baseStore.currentScreen == 2 " @click="baseStore.currentScreen = 1 ; searchStore.userGemeenteInput = '' ">
                <i class="fa-solid fa-circle-chevron-left"></i>  <span class="text-underline "> Terug</span>
              </div>
              <div style="text-align:center; position:absolute; width:90%">
                <img src="https://nieuwsblad-onderwijzer.lwprod.nl/images/onderwijzer-logo.svg" alt="" style="margin-top:-19px" />
              </div>
              
          </div>

        <Search v-if="baseStore.currentScreen == 0 " />
        <SchoolOverview v-if="baseStore.currentScreen == 1 " />
        
        <SchoolDetail v-if="baseStore.currentScreen == 2 " />
      </div>
      
      
      

    </div>
  </div>
   
</template>

<style >
@import 'https://www.nieuwsblad.be/extra/static/messagent/templates/2022/css/bootstrap4_prefixed.css';

@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
/* 
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://markup.nieuwsblad.be/extra/assets/css/fonts.css");
@import url("https://markup.hbvl.be/fonts/v2.0.0/fonts.css");
@import url("https://markup.gva.be/fonts/v2.0.0/fonts.css"); */

#appwrapper {background:white}
html {font-size:16px !important}

/**** BRAND ****/

/**fonts**/
#messagentWrap.nb {font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important; }
#messagentWrap.nb .brands-font-primary {font-family:Produkt,Arial,Helvetica,sans-serif !important; font-weight: bold !important;}
#messagentWrap.nb .brands-font-secondary {font-family:Vitesse Black,sans-serif !important; }

#messagentWrap.hbvl {font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;}
#messagentWrap.hbvl .brands-font-primary {font-family: 'Mark Pro Narrow' !important }
#messagentWrap.hbvl .brands-font-secondary {font-family: 'Helvetica Neue Condensed' !important  }

#messagentWrap.gva {font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;}
#messagentWrap.gva .brands-font-primary {font-family: FFGoodProWide, 'FFGoodProWide Fallback', Open Sans, Arial, Helvetica, sans-serif !important; font-weight:500 }
#messagentWrap.gva .brands-font-secondary {font-family: FGoodOTCondensed, 'FFGoodOTCondensed Fallback', Open Sans, Arial, Helvetica, sans-serif !important  }
/**fonts**/

/**colors**/
#messagentWrap.nb .brands-text-color-primary { color:#000068 }
#messagentWrap.nb .brands-text-color-secondary { color:#5811F4 }
#messagentWrap.nb .brands-text-color-tertiary { color:#000000 }

#messagentWrap.nb .brands-button-color-primary { background-color:#F75821; color:white; }
#messagentWrap.nb .brands-button-color-secondary { background-color:#5811F4; color:white; }
#messagentWrap.nb .brands-button-color-tertiary { background-color:#000000; color:white; }

#messagentWrap.nb .bg-lightgrey {background-color: #ebefff;}

#messagentWrap.nb .text-accent-blue { color:#000068}
#messagentWrap.nb .text-accent-orange { color:#F75821}
#messagentWrap.nb .text-accent-pink { color:#EF83F7}
#messagentWrap.nb .text-accent-lightblue { color:#29ABE2}
#messagentWrap.nb .text-accent-purple { color:#5811F4}
#messagentWrap.nb .text-accent-green { color:#00ED36}
#messagentWrap.nb .text-accent-darkgreen { color:#3f7c4d}
#messagentWrap.nb .text-accent-yellow { color:#F7D611}



#messagentWrap.hbvl .brands-text-color-primary { color:#009fe3 }
#messagentWrap.hbvl .brands-text-color-secondary { color:#000000 }
#messagentWrap.hbvl .brands-text-color-tertiary { color:#000000 }

#messagentWrap.hbvl .brands-button-color-primary { background-color:#ffed00; color:black; }
#messagentWrap.hbvl .brands-button-color-secondary { background-color:#009fe3; color:white; }
#messagentWrap.hbvl .brands-button-color-tertiary { background-color:#000000; color:white; }

#messagentWrap.hbvl .bg-lightgrey {background-color: #FFEFCC;}




#messagentWrap.gva .brands-text-color-primary { color:#e20714 }
#messagentWrap.gva .brands-text-color-secondary { color:#000000 }
#messagentWrap.gva .brands-text-color-tertiary { color:#000000 }

#messagentWrap.gva .brands-button-color-primary { background-color:#e20714; color:white; }
#messagentWrap.gva .brands-button-color-secondary { background-color:#000000; color:white; }
#messagentWrap.gva .brands-button-color-tertiary { background-color:#000000; color:white; }

#messagentWrap.gva .bg-lightgrey {background-color: #ffeff0;}
/**colors**/
/**** BRAND ****/



/****MAIN****/
#messagentWrap  {font-size:16px}

/**checkbox**/
#messagentWrap .custom-control-label {padding-left:10px}
#messagentWrap .custom-checkbox .custom-control-label::before {
    border-radius: 0;
    transform: scale(1.5);
}

#messagentWrap .custom-control-label::before, #messagentWrap .custom-file-label, #messagentWrap .custom-select {
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.custom-control-label::before {
    position: absolute;
    top: 0.4rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    content: "";
    background-color: transparent ;
    border: black solid 1px;
}

#messagentWrap .custom-checkbox .custom-control-input:checked~.custom-control-label::after {
    
}


#messagentWrap .custom-control-label::after {
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80% 70%;
}

/*remove the blue outline on focus from checkbox*/
input[type="checkbox"]:focus + label::before {
  outline: none !important;
  box-shadow: none !important
}

#messagentWrap.nb .custom-control-label::before {
  border-color: #F75821;
}
#messagentWrap.nb .custom-control-input:checked~.custom-control-label::before {
    color: #fff;
    border-color: #F75821;
    background-color: #F75821;
}

#messagentWrap.gva .custom-control-label::before {
  border-color: #e20714;
}
#messagentWrap.gva .custom-control-input:checked~.custom-control-label::before {
    color: #fff;
    border-color: #e20714;
    background-color: #e20714;
}

#messagentWrap.hbvl .custom-control-label::before {
  border-color: #000000;
}
#messagentWrap.hbvl .custom-control-input:checked~.custom-control-label::before {
    color: #fff !important;
    border-color: #000000;
    background-color: #000000;
}

/**checkbox**/

/****MAIN****/




/**** HELPER CLASSES ****/
#messagentWrap .text-xs { font-size:0.5rem; line-height: 1rem;}
#messagentWrap .text-sm { font-size:0.7rem; line-height: 1.1rem}
#messagentWrap .text-md { font-size:0.8rem; line-height: 1.2rem}
#messagentWrap .text-nm { font-size:1rem; line-height: 1.5rem}
#messagentWrap .text-lg { font-size:1.2rem; line-height: 1.7rem}
#messagentWrap .text-xl { font-size:1.8rem; line-height: 2.3rem}
#messagentWrap .text-2xl { font-size:2rem; line-height: 2.5rem}
#messagentWrap .text-3xl { font-size:2.5rem; line-height: 3rem}
#messagentWrap .text-4xl { font-size:3rem; line-height: 3.5rem}

#messagentWrap .text-bold {font-weight: bold;}
#messagentWrap .text-normal {font-weight: normal !important;}
#messagentWrap .text-underline {text-decoration: underline !important;}
#messagentWrap .text-muted {opacity:0.8}
#messagentWrap .text-error {color:red}

#messagentWrap .cursor-pointer {cursor:pointer}

#messagentWrap .no-underline {text-decoration: none !important;}


#messagentWrap .rounded {border-radius: 0.25rem!important;}
#messagentWrap .rounded-md {border-radius: 0.5rem!important;}
#messagentWrap .rounded-lg {border-radius: 1rem!important;}
#messagentWrap .rounded-xl {border-radius: 1.5rem!important;}
#messagentWrap .rounded-none {border-radius:0 !important}

#messagentWrap .border-none {border:0px solid black !important}

#messagentWrap .full-block {margin:auto 0px}

@media screen and (max-width: 767px) {
  #messagentWrap .full-block {margin:auto -15px}
}


/**** HELPER CLASSES ****/


#messagentWrap{max-width:995px; margin:0 auto;}

#messagentWrap .bg-lightgrey {background-color: #f1f7ff;}


#messagentWrap a {
    color: #6578c7;
    text-decoration: none;
    background-color: transparent;
}


#messagentWrap .popper {padding:20px; background-color: white; -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.28);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.28);
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.28); width:320px;}
#messagentWrap .popper-inner {font-size:12px; text-align:left; font-weight: normal;;}


#messagentWrap canvas[style] {display: inline !important;}

#messagentWrap .form-control:focus, #messagentWrap .btn:focus  {box-shadow:none}

#messagentWrap .btn-inverted {border:2px solid #000068 !important; background-color: white !important; color:#000068 !important;}


#messagentWrap .fixed-header-top {background:#e0e0ec; position:sticky; top: 0;  z-index: 100000; padding:20px !important; max-height:60px; }

#messagentWrap .form-control-lg {
    height: calc(1.5em + 1.8rem + 2px); 
    }


.item {background:#ffffff; padding:15px 20px; border-bottom:1px solid #e5e7eb}
.item.item-open {background:#f7f9ff}



/* PIE & BAR */

.bar-height {max-height:200px; }
.pie-height {min-height:140px}

.text-in-pie {margin-top: -5.2rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.3rem !important;
    color:#000068 !important
}



@media screen and (max-width: 800px) {

  .text-in-pie {
    margin-top: -5rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.0rem !important;
  }

}

@media screen and (max-width: 650px) {

  .text-in-pie {
    margin-top: -4.5rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.0rem !important;
  }

  #messagentWrap .pie-wrapper {
    margin:10px !important;
  }

}

@media screen and (max-width: 574px) {x

    .bar-height {
      max-height:200px; 
      margin-bottom:50px;
    }
    
    .text-in-pie {
      margin-top: -4.5rem;
      width: 100%;
      font-family: produkt;
      font-size: 1.0rem !important;
    }
}

/* @media screen and (max-width: 474px) {
    .bar-height {max-height:200px; margin-bottom:50px }
    .text-in-pie {margin-top: -4.0rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.0rem !important;
}
} */

@media screen and (max-width: 650px) {
    .flex-container {
        justify-content: flex-start;
    }
    .pie-left-col {margin-right:5%;}

}


@media screen and (max-width: 450px) {
    .pie-left-col {width:120px; margin-right:5%; float:left;}
}
/* PIE */

</style>

