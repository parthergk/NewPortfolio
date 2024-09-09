export const menuSlide = {
    initial: { y: "-100%" }, // Start off-screen at the top
    enter: { y: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }, // Slide in to the original position
    exit: { y: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } } // Slide back out to the top
  };
  
export const slide = {
    initial: {x: 80},
    enter: i => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: i => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}