
export const state = () =>({
posts: [ ]
})

export const mutations ={
      setPosts(state, posts) {
      state.posts = posts
    },
    limpiar(value) {
      return value.replace(/<\/?[^>]+(>|$)/g, "");
    }
}
 
/* export const actions ={
async loadPost({commit,$content}){
 const info = await $content("b").fetch(); 
  commit('setPosts', info) 
     await queryContent("b").then((response) => {
          commit('setPosts', response.data)
        console.log(response)
      })  
}
} */

/* const req = require.context("../sitio/content/", true, /b\.json$/);
  req.keys().forEach(filename => req(filename)); */

 export const actions = {
  async loadPost({ commit }) {
    let files = await require.context(
      "~/content/",
      false,
      /\.json$/
    );

    files.keys().forEach(filename => info(filename));
     console.log(files)
    await commit("setPosts", files);
  }
};
 



export const getters={
    getPosts(state){
        state.posts
    }
}