function togglecard(a){var b=$("#"+a),c=b.children().first(),d=c.outerHeight();b.toggleClass("card-displayed"),b.hasClass("card-displayed")?(b.css({height:d}),c.css({left:0,opacity:1}),$(".card-displayed").each(function(){var b=$(this).attr("id");b!=a&&togglecard(b)})):(c.css({left:ANIMATION_SIDE,opacity:0}),b.css({height:0}))}$(function(){$(".texts-wrapper").click(function(){location.href=$(this).find("a")[0].href})});var ANIMATION_SIDE=30;