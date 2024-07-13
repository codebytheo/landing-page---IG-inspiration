export const clipPath1 = {
  hidden:{
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  show:{
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    transition:{
      duration:0.6,
      type:"tween",
      ease:"easeInOut"
    }
  }
}
export const clipPath2 = {
  hidden:{
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  show:{
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    transition:{
      duration:0.6,
      type:"tween",
      ease:"easeInOut"
    }
  }
}
export const clipPath3 = {
  hidden:{
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  show:{
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    transition:{
      duration:0.6,
      type:"tween",
      ease:"easeInOut"
    }
  }
}
export const clipPath4 = {
  hidden:{
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  show:{
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    transition:{
      duration:0.6,
      type:"tween",
      ease:"easeInOut"
    }
  }
}

export const rectangleH = {
  hidden:{
    height:0,
  },
  show:{
    height:"100%",
    transition:{
      delay:0.4,
      duration:1,
      ease:"easeInOut"
    }
  },
  moveXright:{
    x:"440px",
    transition:{
      delay:2.2,
      duration:1,
      ease:"easeInOut"
    }
  },
  moveXleft:{
    x:"-440px",
    transition:{
      delay:2.2,
      duration:1,
      ease:"easeInOut"
    }
  }
}
export const rectangleW = {
  hidden:{
    width:0,
  },
  show:{
    width:"100%",
    transition:{
      delay:0.8,
      duration:1,
      ease:"easeInOut"
    }
  },
  moveYup:{
    y:"-202px",
    transition:{
      delay:2.2,
      duration:1,
      ease:"easeInOut"
    }
  },
  moveYdown:{
    y:"202px",
    transition:{
      delay:2.2,
      duration:1,
      ease:"easeInOut"
    }
  }
}

export const marquee = {
  hidden:{
    display:"none",
  },
  show: {
    display:"block",
    x: ["110%","-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        delay:0.6,
        ease: "linear",
      },
    },
  },
};