/**
 * Copyright 2023 Athanasios Papias
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Animations */

function fadeIn() {
  var fades = document.querySelectorAll(".fadeIn");
  for (var i = 0; i < fades.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = fades[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      fades[i].classList.add("active");
    } else {
      fades[i].classList.remove("active");
    }
  }
}

function fadeInUp() {
  var fades = document.querySelectorAll(".fadeInUp");
  for (var i = 0; i < fades.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = fades[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      fades[i].classList.add("active");
    } else {
      fades[i].classList.remove("active");
    }
  }
}

window.addEventListener("load", fadeIn);
window.addEventListener("scroll", fadeIn);
window.addEventListener("scroll", fadeInUp);