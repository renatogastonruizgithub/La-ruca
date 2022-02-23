
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
 
export const actions ={
async loadPost({commit}){
 
       await this.$axios.get("https://proyectoirradiando.000webhostapp.com/wp-json/wp/v2/posts").then((response) => {
          commit('setPosts', response.data)
        
      })
  
}

}

export const getters={
    getPosts(state){
        state.posts
    }
}