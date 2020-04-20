import Vue from 'vue';
import Router from 'vue-router';
import ItemProduct from '@/components/ItemProduct';
import Items from '@/components/Items';

Vue.use(Router);

let router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'product',
      component: ItemProduct,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Items,
      meta: {
        requiresGuest: true
      }
    },
  ]
});



export default router;