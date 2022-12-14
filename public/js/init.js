
jQuery(document).ready(function () {
  "use strict";
  tonni_tm_modalbox();
  tonni_tm_counter();
  tonni_tm_trigger_menu();
  tonni_tm_contact_popup();
  tonni_tm_modalbox_news();
  tonni_tm_modalbox_portfolio();
  progress_by_frenify();
  tonni_tm_cursor();
  tonni_tm_imgtosvg();
  tonni_tm_popup();
  tonni_tm_data_images();
  tonni_tm_contact_form();
  tonni_tm_nav_bg();
  tonni_tm_testimonials();
  hashtag();
  tonni_tm_totop();
  jQuery(window).load("body", function () {
    tonni_tm_my_load();

  });
  jQuery(window).on("scroll", function () {
   
  });
});
function tonni_tm_counter() {
  "use strict";
  $(".tonni_tm_counter").each(function () {
    var el = $(this);
    el.waypoint({
      handler: function () {
        if (!el.hasClass("stop")) {
          el.addClass("stop").countTo({
            refreshInterval: 50,
            formatter: function (value, options) {
              return value
                .toFixed(options.decimals)
                .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
            },
          });
        }
      },
      offset: "95%",
    });
  });
}
function tonni_tm_modalbox() {
  "use strict";
  jQuery(".tonni_tm_all_wrap").prepend(
    '<div class="tonni_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>'
  );
}
function tonni_tm_trigger_menu() {
  "use strict";
  var hamburger = jQuery(".trigger .hamburger");
  var mobileMenu = jQuery(".tonni_tm_mobile_menu .dropdown");
  var mobileMenuList = jQuery(
    ".tonni_tm_mobile_menu .dropdown .dropdown_inner ul li a"
  );
  hamburger.on("click", function () {
    var element = jQuery(this);
    if (element.hasClass("is-active")) {
      element.removeClass("is-active");
      mobileMenu.slideUp();
    } else {
      element.addClass("is-active");
      mobileMenu.slideDown();
    }
    return false;
  });
  mobileMenuList.on("click", function () {
    jQuery(".trigger .hamburger").removeClass("is-active");
    mobileMenu.slideUp();
    return false;
  });
}
function tonni_tm_contact_popup() {
  "use strict";
  var modalBox = jQuery(".tonni_tm_modalbox");
  var button = jQuery(".contact_modalbox_link");
  var closePopup = modalBox.find(".close");
  var content = jQuery(".modalbox_contact").html();
  button.on("click", function () {
    modalBox.addClass("opened");
    modalBox.find(".description_wrap").html(content);
    tonni_tm_contact_form();
    return false;
  });
  closePopup.on("click", function () {
    modalBox.removeClass("opened");
    modalBox.find(".description_wrap").html("");
    return false;
  });
}
function tonni_tm_modalbox_news() {
  "use strict";
  var modalBox = jQuery(".tonni_tm_modalbox");
  var button = jQuery(
    ".tonni_tm_news .tonni_tm_full_link,.tonni_tm_news .news_list .details .title a"
  );
  var closePopup = modalBox.find(".close");
  button.on("click", function () {
    var element = jQuery(this);
    var parent = element.closest(".list_inner");
    var content = parent.find(".news_hidden_details").html();
    var image = element
      .closest(".list_inner")
      .find(".image .main")
      .data("img-url");
    var date = parent.find(".details .date").text();
    var title = parent.find(".details .title a").text();
    modalBox.addClass("opened");
    modalBox.find(".description_wrap").html(content);
    modalBox
      .find(".news_popup_informations")
      .prepend(
        '<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' +
          image +
          '"></div></div>'
      );
    modalBox
      .find(".news_popup_informations .image")
      .after(
        '<div class="details"><div class="title"><span>' +
          date +
          "</span><h3>" +
          title +
          "</h3></div><div>"
      );
    tonni_tm_data_images();
    tonni_tm_imgtosvg();
    return false;
  });
  closePopup.on("click", function () {
    modalBox.removeClass("opened");
    modalBox.find(".description_wrap").html("");
    return false;
  });
}
function tonni_tm_modalbox_portfolio() {
  "use strict";
  var modalBox = jQuery(".tonni_tm_modalbox");
  var button = jQuery(".tonni_tm_portfolio .portfolio_popup");
  var closePopup = modalBox.find(".close");
  button.off().on("click", function () {
    var element = jQuery(this);
    var parent = element.closest(".list_inner");
    var content = parent.find(".hidden_content").html();
    var image = parent.find(".image .main").data("img-url");
    var category = parent.find(".details .category").text();
    var title = parent.find(".details .title").text();
    modalBox.addClass("opened");
    modalBox.find(".description_wrap").html(content);
    modalBox
      .find(".popup_details")
      .prepend(
        '<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' +
          image +
          '"></div></div>'
      );
    modalBox
      .find(".popup_details .top_image")
      .after(
        '<div class="portfolio_main_title"><span><a href="#">' +
          category +
          "</a></span><h3>" +
          title +
          "</h3><div>"
      );
    tonni_tm_data_images();
    return false;
  });
  closePopup.on("click", function () {
    modalBox.removeClass("opened");
    modalBox.find(".description_wrap").html("");
    return false;
  });
}
function tdProgress(container) {
  "use strict";
  container.find(".progress_inner").each(function () {
    var progress = jQuery(this);
    var pValue = parseInt(progress.data("value"), 10);
    var pColor = progress.data("color");
    var pBarWrap = progress.find(".bar");
    var pBar = progress.find(".bar_in");
    var number = progress.find(".number");
    var label = progress.find(".label");
    number.css({ right: 100 - pValue + "%" });
    setTimeout(function () {
      label.addClass("opened");
    }, 500);
    pBar.css({ width: pValue + "%", backgroundColor: pColor });
    setTimeout(function () {
      pBarWrap.addClass("open");
    });
  });
}
function progress_by_frenify(wrapper) {
  "use strict";
  var element;
  if (wrapper) {
    element = wrapper.find(".dodo_progress");
  } else {
    element = jQuery(".dodo_progress");
  }
  element.each(function () {
    var pWrap = jQuery(this);
    pWrap.find(".number").css({ right: "100%" });
    pWrap.waypoint({
      handler: function () {
        tdProgress(pWrap);
      },
      offset: "90%",
    });
  });
}
function tonni_tm_preloader() {
  "use strict";
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;
  var preloader = $("#preloader");
  if (!isMobile) {
    setTimeout(function () {
      preloader.addClass("preloaded");
    }, 800);
    setTimeout(function () {
      preloader.remove();
    }, 2000);
  } else {
    preloader.remove();
  }
}
function tonni_tm_my_load() {
  "use strict";
  var speed = 500;
  setTimeout(function () {
    tonni_tm_preloader();
  }, speed);
}
function tonni_tm_cursor() {
  "use strict";
  var myCursor = jQuery(".mouse-cursor");
  if (myCursor.length) {
    if ($("body")) {
      const e = document.querySelector(".cursor-inner"),
        t = document.querySelector(".cursor-outer");
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        $("body").on(
          "mouseenter",
          "a, .tonni_tm_testimonials .avatars ul li, .cursor-pointer",
          function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }
        ),
        $("body").on(
          "mouseleave",
          "a, .tonni_tm_testimonials .avatars ul li, .cursor-pointer",
          function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }
        ),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
}
function tonni_tm_imgtosvg() {
  "use strict";
  jQuery("img.svg").each(function () {
    var jQueryimg = jQuery(this);
    var imgClass = jQueryimg.attr("class");
    var imgURL = jQueryimg.attr("src");
    jQuery.get(
      imgURL,
      function (data) {
        var jQuerysvg = jQuery(data).find("svg");
        if (typeof imgClass !== "undefined") {
          jQuerysvg = jQuerysvg.attr("class", imgClass + " replaced-svg");
        }
        jQuerysvg = jQuerysvg.removeAttr("xmlns:a");
        jQueryimg.replaceWith(jQuerysvg);
      },
      "xml"
    );
  });
}
function tonni_tm_popup() {
  "use strict";
  jQuery(".gallery_zoom").each(function () {
    jQuery(this).magnificPopup({
      delegate: "a.zoom",
      type: "image",
      gallery: { enabled: true },
      removalDelay: 300,
      mainClass: "mfp-fade",
    });
  });
  jQuery(".popup-youtube, .popup-vimeo").each(function () {
    jQuery(this).magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true,
    });
  });
  jQuery(".soundcloude_link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
}
function tonni_tm_data_images() {
  "use strict";
  var data = jQuery("*[data-img-url]");
  data.each(function () {
    var element = jQuery(this);
    var url = element.data("img-url");
    element.css({ backgroundImage: "url(" + url + ")" });
  });
}
function tonni_tm_contact_form() {
  "use strict";
  jQuery(".contact_form #send_message").on("click", function () {
    var name = jQuery(".contact_form #name").val();
    var email = jQuery(".contact_form #email").val();
    var message = jQuery(".contact_form #message").val();
    var subject = jQuery(".contact_form #subject").val();
    var success = jQuery(".contact_form .returnmessage").data("success");
    jQuery(".contact_form .returnmessage").empty();
    if (name === "" || email === "" || message === "") {
      jQuery(".contact_form .empty_notice")
        .slideDown(500)
        .delay(2000)
        .slideUp(500);
    } else {
      jQuery.post(
        "modal/contact.php",
        {
          ajax_name: name,
          ajax_email: email,
          ajax_message: message,
          ajax_subject: subject,
        },
        function (data) {
          jQuery(".contact_form .returnmessage").append(data);
          if (
            jQuery(".contact_form .returnmessage span.contact_error").length
          ) {
            jQuery(".contact_form .returnmessage")
              .slideDown(500)
              .delay(2000)
              .slideUp(500);
          } else {
            jQuery(".contact_form .returnmessage").append(
              "<span class='contact_success'>" + success + "</span>"
            );
            jQuery(".contact_form .returnmessage")
              .slideDown(500)
              .delay(4000)
              .slideUp(500);
          }
          if (data === "") {
            jQuery("#contact_form")[0].reset();
          }
        }
      );
    }
    return false;
  });
}
function tonni_tm_nav_bg() {
  "use strict";
  jQuery(window).on("scroll", function () {
    var menu = jQuery(".tonni_tm_header");
    var progress = jQuery(".progressbar");
    var WinOffset = jQuery(window).scrollTop();
    if (WinOffset >= 100) {
      menu.addClass("animate");
      progress.addClass("animate");
    } else {
      menu.removeClass("animate");
      progress.removeClass("animate");
    }
  });
}
function tonni_tm_testimonials() {
  "use strict";
  var testimonials = jQuery(".tonni_tm_testimonials");
  var placeholderIMG = '<img src="img/thumbs/37-45.jpg" alt="" />';
  var title = testimonials.find(".hidden_details").data("title");
  var list = testimonials.find(".hidden_details li");
  var count = 0;
  var active = "";
  var images = "";
  var names = "";
  var jobs = "";
  var quotes = "";
  var avatars = "";
  var avatarArray = [];
  list.each(function () {
    var element = jQuery(this);
    var image = element.data("img");
    var name = element.data("name");
    var job = element.data("job");
    var quote = element.data("quote");
    count++;
    if (count === 1) {
      active = "active";
    } else {
      active = "";
    }
    images +=
      '<li class="' +
      active +
      '" data-index="' +
      count +
      '"><div class="image">' +
      placeholderIMG +
      '<div class="main" data-img-url="' +
      image +
      '"></div></div></li>';
    names +=
      '<li class="' +
      active +
      '" data-index="' +
      count +
      '"><h3>' +
      name +
      "</h3></li>";
    jobs +=
      '<li class="' +
      active +
      '" data-index="' +
      count +
      '"><span>' +
      job +
      "</span></li>";
    quotes +=
      '<li class="' +
      active +
      '" data-index="' +
      count +
      '"><p>' +
      quote +
      "</p></li>";
    avatarArray.push(image);
  });
  count = 0;
  for (var i = avatarArray.length; i > 0; i--) {
    count++;
    if (count === 1) {
      active = "active";
    } else {
      active = "";
    }
    avatars +=
      '<li class="' +
      active +
      ' grid-item" data-index="' +
      i +
      '"><span><div data-img-url="' +
      avatarArray[i - 1] +
      '"></div></span><span class="hidden">' +
      i +
      "</span></li>";
  }
  testimonials
    .find(".testimonials_inner")
    .append('<div class="leftpart"></div>')
    .find(".leftpart")
    .append("<ul>" + images + "</ul>");
  testimonials
    .find(".testimonials_inner")
    .append('<div class="rightpart"><div class="rightpart_in"></div></div>')
    .find(".rightpart_in")
    .append(
      '<div class="main_title"><h3><span class="big">' +
        title +
        '<span class="small">' +
        title +
        '<img class="svg" src="img/svg/quote.svg" alt="" /></span></span></h3></div><div class="quotes"><ul>' +
        quotes +
        '</ul></div><div class="details"><div class="infos"><div class="avatars"><ul class="grid-sort">' +
        avatars +
        '</ul></div><div class="short"><ul class="name">' +
        names +
        '</ul><ul class="job">' +
        jobs +
        "</ul></div></div></div>"
    );
  var thumbImages = testimonials.find(".avatars li");
  testimonials
    .find(".avatars")
    .css({ width: 45 + (thumbImages.length - 1) * 25 + "px" });
  test();
  var mygrid = jQuery(".grid-sort").isotope({});
  thumbImages.off().on("click", function () {
    var element = jQuery(this);
    var elementDataIndex = element.data("index");
    var currentSortIndex = parseInt(element.find(".hidden").text());
    if (currentSortIndex === 1) {
      return false;
    }
    element
      .parent()
      .children()
      .each(function () {
        var element2 = $(this);
        var input = element2.find(".hidden");
        var sortIndex = parseInt(input.text());
        if (currentSortIndex > sortIndex) {
          input.text(sortIndex + 1);
        }
      });
    element.find(".hidden").text(1);
    test();
    mygrid.isotope("updateSortData").isotope();
    testimonials.find(".leftpart ul li").removeClass("active");
    testimonials
      .find(".leftpart ul li:nth-child(" + elementDataIndex + ")")
      .addClass("active");
    testimonials.find(".quotes ul li").removeClass("active");
    testimonials
      .find(".quotes ul li:nth-child(" + elementDataIndex + ")")
      .addClass("active");
    testimonials.find(".name li").removeClass("active");
    testimonials
      .find(".name li:nth-child(" + elementDataIndex + ")")
      .addClass("active");
    testimonials.find(".job li").removeClass("active");
    testimonials
      .find(".job li:nth-child(" + elementDataIndex + ")")
      .addClass("active");
  });
  tonni_tm_data_images();
  tonni_tm_imgtosvg();
}
function test() {
  "use strict";
  var mygrid = jQuery(".grid-sort").isotope({
    itemSelector: ".grid-item",
    getSortData: { number: ".hidden parseInt" },
  });
  mygrid.isotope({ sortBy: "number", sortAscending: false });
  jQuery(".avatars").each(function () {
    var li = jQuery(this).find("li");
    var i = li.length;
    jQuery(this)
      .find("li")
      .each(function () {
        jQuery(this).css({
          zIndex: i + 1 - parseInt(jQuery(this).find(".hidden").text()),
        });
      });
  });
}
function hashtag() {
  "use strict";
  var ccc = $(".tonni_tm_header .menu .ccc");
  var element = $(".tonni_tm_header .menu .current a");
  $(".tonni_tm_header .menu a").on("mouseenter", function () {
    var e = $(this);
    currentLink(ccc, e);
  });
  $(".tonni_tm_header .menu").on("mouseleave", function () {
    element = $(".tonni_tm_header .menu .current a");
    currentLink(ccc, element);
  });
  currentLink(ccc, element);
}
function currentLink(ccc, e) {
  "use strict";
  if (!e.length) {
    return false;
  }
  var left = e.offset().left;
  var width = e.outerWidth();
  var menuleft = $(".tonni_tm_header .menu").offset().left;
  ccc.css({ left: left - menuleft + "px", width: width + "px" });
}
function tonni_tm_totop() {
  "use strict";
  var text = $(".progressbar .text");
  text.css({ bottom: 105 + text.width() });
  $(".progressbar a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
}
