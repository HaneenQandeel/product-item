<template>
<div class="container">
    <div class="favourites">
    <h2>Favourites</h2>
    <table>
        <tr class="bTop">
            <th class="item-name">Items Name</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>
                <div class="item-img">
                    <img src="../assets/img2.jpg" width="50px"/>
                    <p></p>
                </div>
            
            </td>
            <td>500</td>
        </tr>
    </table>

</div>

</div>


</template>

<script>
  export default {
    data: () => ({
     items:[]
    }),
    methods:{
        adds(){
            let count = localStorage.getItem("products");
            console.log(count)
        }
    },
    created(){
        let count = localStorage.getItem("products");
        
        console.log(count)
        
    },
    mounted(){
        this.items = localStorage.getItem("products");
    }
  }
</script>

<style>
table{
    width:700px;
}
.bTop{
    background-color:#eee;
}
.favourites{
    margin:0 auto;
}
th.item-name{
    float: left;
    margin: 16px 20px;
}
table{
    margin-left: 235px;
    margin-top: 30px;
}
tr.bTop{
    height:60px;
}
</style>