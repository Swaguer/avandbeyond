!function(e,n){"use strict";var t=function(e,n){jQuery(e).each((function(e){var n=jQuery(this).find(".elementor-inner-section.bdt-sticky");n.length&&jQuery(n).wrap('<div class="bdt-sticky-wrapper"></div>')}))};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/section",t)}))}(jQuery,window.elementorFrontend);