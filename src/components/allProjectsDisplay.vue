<template>
    <h3 class="text-6xl underline">Our work</h3>
    <div class="flex flex-wrap justify-center md:justify-between" >
      <div v-for="project in infoAllProjects" class="container-project mt-9" :class="`${project.name.url_name}`">
        <div class="text-project p-9">
          <div>
            <h4 class="text-3xl text-white font-bold">{{project.name.full_name}}</h4>
            <p class="mt-12 text-xl" v-html="breakingStrings(project.description.short_description)" ></p>
          </div>
            <button @click="projectRedirect(project.name.url_name,'Title')" class="link-btn w-full p-3">Read more!</button>
          </div>
        </div>
      </div>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter();

const projectRedirect = (path: string, section: string) => {
  if(path == 'new_projects') {
    return
  }
   router.push({ path: `/projects/${path}` });
   setTimeout(() => {
     document
       .getElementById(`project${section}`)
       ?.scrollIntoView({ behavior: "smooth" });
   }, 100);
 };

const props = defineProps({
    infoAllProjects:Object
})
const breakingStrings = (data:string)=> {return data.split('//').join('<br/><br/>')}


</script>
<style scoped>
.container-project {
    height: 700px;
    width: 24%;
    position: relative;
    min-width: 300px;
}
.procrastinant{
  background: url(https://res.cloudinary.com/djqzi4hgo/image/upload/v1668782486/vue%20portfolio/projects/procrastinant/portrait-procrastinant_hcvj8z.png)
    center/cover no-repeat;
}
.poke_api{
  background: url(https://res.cloudinary.com/djqzi4hgo/image/upload/v1668700325/vue%20portfolio/projects/poket%20monsters/portrait-pocket-monsters_rfv3cx.png)
    center/cover no-repeat;
}
.spoti_api{
  background: url(https://res.cloudinary.com/djqzi4hgo/image/upload/v1668700377/vue%20portfolio/projects/spotify%20API/portrait-spotiapp_ylu2r1.png)
    left/cover no-repeat;
}
.new_projects{
  background: url(https://res.cloudinary.com/djqzi4hgo/image/upload/v1661502717/todoApp/profile/elegaant-duck_ic1lya.jpg)
  center/cover no-repeat;
}
.text-project{
  position: absolute;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  transition:all 0.4s;
  opacity: 0;
}.text-project:hover{
  opacity: 1;
  transition: 0.5;
  backdrop-filter: blur(4px);
  background-color: rgba(48, 48, 48, 0.6);
}
.link-btn {
  background: var(--primary-btn);
  color: var(--button-green-text);
}
.link-btn:hover{
    background: var(--primary-btn-hover);
    color: var(--button-green-text-hover);
    }

@media (max-width:910px) {
  .container-project{
    width: 100%;
  }
  
}
@media (min-width:912px) {
  .container-project{
    width: 48%;
  }
  
}
@media (min-width:1220px) {
  .container-project{
    width: 32%;
  }
  
}

 @media (min-width:1513px) {
  .container-project{
    width: 24%;
  }
  
}
</style>