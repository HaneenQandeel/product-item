<template>
<div class="container">
    <div class="favourites">
    <p id="demo">Haneen</p>
    <table>
        <tr class="bTop">
            <th>Items Name</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>
                <div class="item-img">
                    <img src="../assets/img2.jpg" width="50px"/>
                    <p>SEEN by</p>
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
</style>