const MultipleClass = (selector,styles)=>{

const element = document.querySelectorAll(selector)
element.forEach((element)=>{
    Object.assign(element.style,styles)
})


}


window.addEventListener("resize",()=>{
    const mediaQuery = window.matchMedia('(max-width:840px)')
    const width = window.innerWidth

    const IconContainer = document.querySelector(".containerImage")
    const HeroContainer = document.querySelector(".Hero-container")
    const EduSection = document.querySelectorAll(".eduSection")
    // const EduSection = document.querySelectorAll(".eduSection")

if(width < 841 ){
IconContainer.style.display = "none"
HeroContainer.style.width = "100%"


MultipleClass(".eduSection", {flexDirection:"column"})

MultipleClass(".portfolio-grid", {flexDirection:"column"})

MultipleClass(".portfolio-item", {width:"100%"})

MultipleClass(".skill-grid", {flexDirection:"column"})

MultipleClass(".skill", {width:"100%"})





}
else{
    IconContainer.style.display = "block"
    HeroContainer.style.width = "50%"
    MultipleClass(".eduSection", {flexDirection:"row"})
    MultipleClass(".portfolio-grid", {flexDirection:"row"})
    MultipleClass(".portfolio-item", {width:"45%"})
    MultipleClass(".skill-grid", {flexDirection:"row"})





}

const ExpLeft = document.querySelector(".ExpChildLeft")
const ExpRight = document.querySelector(".ExpChildRight")
const containerImage = document.querySelector("#MyImageContainer")
const ExperienceSection  = document.querySelector('#Experience')
const ExperienceWriteUp = document.querySelector("#Exp-Writeup-Content-Div")
const ownerName = document.querySelector(".OwnerName")

if(width < 1420){




ExpLeft.style.display = "none"
ExpRight.style.width = "100%"

// containerImage.style.flexDirection = "column"
containerImage.style.display= "none"




}

else{
    ExpLeft.style.display = "flex"
    ExpRight.style.width = "50%"
    containerImage.style.flexDirection = "row"




}

if(width < 631){
    ExperienceSection.style.margin = 0

}
else{
    ExperienceSection.style.margin = "93px"
}

if(width < 436){
ExperienceWriteUp.style.fontSize = "12px"
document.querySelector(".OwnerName").style.visibility = "hidden"
}
else{
    ExperienceWriteUp.style.fontSize = "16px"
    document.querySelector(".OwnerName").style.visibility = "visible"


}


if(width < 330){
    document.querySelector(".HeaderName").style.fontSize = "33px"
}
else{
    document.querySelector(".HeaderName").style.fontSize = "45px"

}

if(width < 961){
    document.querySelector("#navContent1").style.display = "none"
    document.querySelector("#navContent2").style.display = "none"
    document.querySelector(".hamburger").style.display = "flex"


}
else{
document.querySelector("#navContent1").style.display = "block"
    document.querySelector("#navContent2").style.display = "block"
    document.querySelector(".hamburger").style.display = "none"

}


})



    
   function onLoad(){
        const mediaQuery = window.matchMedia('(max-width:840px)')
        const width = window.innerWidth
    
        const IconContainer = document.querySelector(".containerImage")
        const HeroContainer = document.querySelector(".Hero-container")
        const EduSection = document.querySelectorAll(".eduSection")
        // const EduSection = document.querySelectorAll(".eduSection")
    
    
    if(width < 841 ){
    IconContainer.style.display = "none"
    HeroContainer.style.width = "100%"
    
    
    MultipleClass(".eduSection", {flexDirection:"column"})
    
    MultipleClass(".portfolio-grid", {flexDirection:"column"})
    
    MultipleClass(".portfolio-item", {width:"100%"})
    
    MultipleClass(".skill-grid", {flexDirection:"column"})
    
    MultipleClass(".skill", {width:"100%"})
    
    
    
    
    
    }
    else{
        IconContainer.style.display = "block"
        HeroContainer.style.width = "50%"
        MultipleClass(".eduSection", {flexDirection:"row"})
        MultipleClass(".portfolio-grid", {flexDirection:"row"})
        MultipleClass(".portfolio-item", {width:"45%"})
        MultipleClass(".skill-grid", {flexDirection:"row"})
    
    
    
    
    
    }
    
    const ExpLeft = document.querySelector(".ExpChildLeft")
    const ExpRight = document.querySelector(".ExpChildRight")
    const containerImage = document.querySelector("#MyImageContainer")
    const ExperienceSection  = document.querySelector('#Experience')
    const ExperienceWriteUp = document.querySelector("#Exp-Writeup-Content-Div")
    const ownerName = document.querySelector(".OwnerName")
    
    if(width < 1300){

     
    
    ExpLeft.style.display = "none"
    ExpRight.style.width = "100%"
    
    // containerImage.style.flexDirection = "column"
    containerImage.style.display= "none"
    
    
    
    
    }
    
    else{
        ExpLeft.style.display = "flex"
        ExpRight.style.width = "50%"
        containerImage.style.flexDirection = "row"
    
    
    
    
    }

    if(width < 961){
        document.querySelector("#navContent1").style.display = "none"
        document.querySelector("#navContent2").style.display = "none"
        document.querySelector(".hamburger").style.display = "flex"
    
    
    }
    else{
    document.querySelector("#navContent1").style.display = "block"
        document.querySelector("#navContent2").style.display = "block"
        document.querySelector(".hamburger").style.display = "none"
    
    }

    
    
    if(document.body.clientWidth < 631){
    
        ExperienceSection.style.margin = "0px"

      
    }
    
    
    else{
        ExperienceSection.style.margin = "93px"
    }
     


    
    if(document.body.clientWidth < 436){
        
    ExperienceWriteUp.style.fontSize = "12px"
    ownerName.style.visibility = "hidden"
    }
    else{
        ExperienceWriteUp.style.fontSize = "16px"
        document.querySelector(".OwnerName").style.visibility = "visible"
    
    
    }
    
    
    if(document.body.clientWidth < 330){
        document.querySelector(".HeaderName").style.fontSize = "33px"
    }
    else{
        document.querySelector(".HeaderName").style.fontSize = "45px"
    
    }
}
   
    

    const hamburgerClick = ()=>{
        if(        document.querySelector("#navBlock").style.display == "none"
    ){
        document.querySelector("#navBlock").style.display = "block"

        }
        else{
            document.querySelector("#navBlock").style.display = "none"

        }
    }


    onLoad()

   