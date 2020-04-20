<template>
    <div class="container">
        <h1>Items of Product</h1>
        <router-link to="/favourites"><h2>{{counter}} <i class="fa fa-heart" aria-hidden="true"></i></h2></router-link>
        <div class="row items">
            <div class="col-md-3 items-prod" v-for="(item,id) in items" :key="id">
                <div class="card-img">
                    <img :src="item.image">
                    <div class="lines"></div>
                    <h4 class="title">{{item.name}}</h4>
                    <div class="list-unstyled">
                        <span class="checked">&#9734;</span>
                        <span class="checked">&#9734;</span>
                        <span class="checked">&#9734;</span>
                        <span class="checked">&#9734;</span>
                        <span class="checked">&#9734;</span>
                        <span>0</span>
                    </div>
                    <h5 class="price">{{item.price}}</h5>
                    <h3 @click.prevent="addTo"><i class="fa fa-heart" aria-hidden="true"></i></h3>

                </div>
            </div>
        
        </div>
    
    </div>



</template>


<script>
  export default {
    data: () => ({
      counter:0,
      items:[
          {
            name:'Computers',
            price:'900$',
            image: [require("../assets/computers.jpg")],
          },
          {
            name:'Laptops',
            price:'2200$',
            image: [require("../assets/laptop.jpg")],
          },
          { 
            name:'Cars',
            price:'1200$',
            image: [require("../assets/img2.jpg")],

          },
          { 
            name:'Mobiles',
            price:'700$',
            image: [require("../assets/mobiles.jpg")],

          }
      ]
     
    }),
    methods:{
        addTo(){
            this.counter++;
            for (var i = 0; i<=this.items; i++){
                var product = this.items[i]
                console.log(product)
            }
            return localStorage.setItem("products",product);
        }
    }
  }
</script>
<style>
.items{
    margin-top:20px;
}
i:hover{
    color:orange;
}
.checked{
  color:orange;
  font-size:30px;
}
.items-prod{
    border:1px solid #eee;
    padding:5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;

}
.lines{
  border:1px solid #eee;
  margin: 15px;
}
.card-img img{
    width:300px;
    height:160px;
}
</style>