<template>
     <div>
          <div class="relative">
               <div class="wwd-menu-wrapper mt-10">
                    <ul class="flex justify-center <md:items-center space-x-4 tabs-menu">
                         <li v-for="(item, index) in items" :class="{'active' : currentTab == `tab-${index + 1}`}" class="px-10 py-3 rounded-full bg-white inline-block cursor-pointer duration-300 md:inline-block md:whitespace-nowrap" @click="selectTab(index + 1)">{{ item.title }}</li>
                    </ul>
                    
               </div>
               <span class="h-full bg-gradient-to-l from-dark to-transparent w-10 block absolute top-0 right-0 z-50 <md:hidden"></span>
          </div>


          
          <transition>
               <div class="tabs relative tabs-wrapper mt-16 md:mt-10" >
                    <div class="w-full wwd-tab absolute " :class="`wwd-tab-${index + 1}`" v-for="(item, index) in items" :ref="`wwd-${index+1}`">
                         <div class="bard text-white text-center" v-html="item.content"></div>

                         <div class="grid grid-cols-4 gap-10 mt-16 md:grid-cols-1">
                              <div class="package-table col-span-3 md:col-span-1">
                                   <div v-for="(packageItem, packageIdx) in item.packages" class="grid" :class="['grid-cols-' + packageItem.cells.length, packageIdx === 0 ? 'table-header' : 'table-body']" >
                                        <div v-for="(cell, cellIdx) in packageItem.cells" class="cell">
                                             {{ cell }}
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <div class="rounded-md p-5 bg-light-gray/30">
                                        <p class="font-medium text-white mb-10">{{ content.extra_message_1 }}</p>
                                        <p class="text-secondary italic text-sm">{{ content.extra_message_2 }}</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </transition>
     </div>
</template>
<script>
import $ from "cash-dom";
export default {
     props: ['items', 'content'],
     data() {
          return {
               currentTab: null
          }
     },
     mounted()
     {
          this.selectTab(1)
     },   
     methods: {
          selectTab(index)
          {
               this.currentTab = 'tab-' + index
               $('.wwd-tab.active').removeClass('active')
               const activeTab = $('.wwd-tab-' + index)
               activeTab.addClass('active')

               $('.tabs-wrapper').css({
                    height: activeTab.height()
               })
          }
     }
};
</script>