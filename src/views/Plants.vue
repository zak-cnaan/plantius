<template>
    <ul>
        <li v-for="item in plants" :key="item.id">
            {{ item.title }}
        </li>
    </ul>
</template>

<script>
import * as firebase from 'firebase';

var db = firebase.firestore();

export default {
    data: function (){
        return {
            plants: [
                {title: "hii", id:1},
                {title: "hii sdfs", id:2},
                {title: "hii 45646", id:3},
            ]
        }

    },
    created () {

        db.collection("plants").get()
        .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        this.plants = [doc.data()]
    })
    .catch((e) => {
        console.log(e)

    });
});

    }
}
</script>

