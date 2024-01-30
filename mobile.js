// mobile.js

export function setupMobile() {
    // Your existing mobile setup code
    let startX, startY;
  
    document.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    });
  
    document.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
  
      const deltaX = endX - startX;
      const deltaY = endY - startY;
  
      const threshold = 50; // Adjust as needed
  
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > threshold) {
          handleInput({ key: "ArrowRight" });
        } else if (deltaX < -threshold) {
          handleInput({ key: "ArrowLeft" });
        }
      } else {
        // Vertical swipe
        if (deltaY > threshold) {
          handleInput({ key: "ArrowDown" });
        } else if (deltaY < -threshold) {
          handleInput({ key: "ArrowUp" });
        }
      }
    });
  }
  