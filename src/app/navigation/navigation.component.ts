import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  scrollYValue = 0;
  windowHeight = window.innerHeight;
  isNavigationShow: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.isNavigationShow = this.router.url.indexOf('home') < 0;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isNavigationShow = this.router.url.indexOf('home') < 0;
      }
    });

    // @ts-ignore
    jQuery.fn.fancyMorph = function( opts ) {

      // tslint:disable-next-line:no-shadowed-variable
      const Morphing = function( jQuerybtn, opts ) {
        const self = this;

        // @ts-ignore
        self.opts = jQuery.extend({
          animationEffect : false,
          infobar    : false,
          buttons    : ['close'],
          smallBtn   : false,
          touch      : false,
          baseClass  : 'fancybox-morphing',
          afterClose : () => {
            self.close();
          }
        }, opts);

        self.init( jQuerybtn );
      };

      Morphing.prototype.init = function( jQuerybtn ) {
        const self = this;

        self.jQuerybtn = jQuerybtn.addClass('morphing-btn');

        // @ts-ignore
        self.jQueryclone = jQuery('<div class="morphing-btn-clone" />')
          .hide()
          .insertAfter( jQuerybtn );

        // Add wrapping element and set initial width used for positioning
        jQuerybtn.wrap( '<span class="morphing-btn-wrap"></span>' ).on('click', e => {
          e.preventDefault();

          self.start();
        });

      };

      Morphing.prototype.start = function() {
        const self = this;

        if ( self.jQuerybtn.hasClass('morphing-btn_circle') ) {
          return;
        }

        // Set initial width, because it is not possible to start CSS transition from 'auto'
        self.jQuerybtn.width( self.jQuerybtn.width() ).parent().width( self.jQuerybtn.outerWidth() );

        self.jQuerybtn.off('.fm').on('transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm', e => {

          if ( e.originalEvent.propertyName === 'width' ) {
            self.jQuerybtn.off('.fm');

            self.animateBg();
          }

        }).addClass('morphing-btn_circle');

      };

      Morphing.prototype.animateBg = function() {
        const self = this;

        self.scaleBg();

        self.jQueryclone.show();

        const btn = document.querySelectorAll('.morphing-btn-clone');
        btn.forEach(el => {
          el.classList.remove('background-confirm');
          el.classList.add('background-menu');
        });
        // Trigger repaint
        // tslint:disable-next-line:no-unused-expression
        self.jQueryclone[0].offsetHeight;

        self.jQueryclone.off('.fm').on('transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm', () => {
          self.jQueryclone.off('.fm');

          self.complete();

        }).addClass('morphing-btn-clone_visible');
      };

      Morphing.prototype.scaleBg = function() {
        const self = this;

        const jQueryclone = self.jQueryclone;
        const scale  = self.getScale();
        const jQuerybtn   = self.jQuerybtn;
        const pos    = jQuerybtn.offset();

        jQueryclone.css({
          // @ts-ignore
          top       : pos.top  + jQuerybtn.outerHeight() * 0.5 - ( jQuerybtn.outerHeight() * scale * 0.5 ) - jQuery(window).scrollTop(),
          // @ts-ignore
          left      : pos.left + jQuerybtn.outerWidth()  * 0.5 - ( jQuerybtn.outerWidth()  * scale * 0.5 ) - jQuery(window).scrollLeft(),
          width     : jQuerybtn.outerWidth()  * scale,
          height    : jQuerybtn.outerHeight() * scale,
          transform : 'scale(' + ( 1 / scale ) + ')'
        });
      };

      Morphing.prototype.getScale = function() {
        const jQuerybtn    = this.jQuerybtn;
        const radius  = jQuerybtn.outerWidth() * 0.5;
        // @ts-ignore
        const left    = jQuerybtn.offset().left + radius - jQuery(window).scrollLeft();
        // @ts-ignore
        const top     = jQuerybtn.offset().top  + radius - jQuery(window).scrollTop();
        // @ts-ignore
        const windowW = jQuery(window).width() * 1.3;
        // @ts-ignore
        const windowH = jQuery(window).height() * 1.3;

        const maxDistHor  = ( left > windowW / 2 ) ? left : ( windowW - left );
        const maxDistVert = ( top > windowH / 2 )  ? top  : ( windowH - top );

        return Math.ceil(Math.sqrt( Math.pow( maxDistHor, 2 ) + Math.pow( maxDistVert, 2 ) ) / radius );
      };

      Morphing.prototype.complete = function() {
        const self = this;
        const jQuerybtn = self.jQuerybtn;

        // @ts-ignore
        jQuery.fancybox.open(document.getElementById('morphing-content-menu')
          /*{ src : jQuerybtn.data('src') || jQuerybtn.attr('href')}*/, self.opts);

        // @ts-ignore
        jQuery(window).on('resize.fm', () => {
          self.scaleBg();
        });

        const bg = document.querySelector('.fancybox-morphing .fancybox-bg');
        bg.classList.remove('background-confirm');
        bg.classList.add('background-menu');
      };

      Morphing.prototype.close = function() {
        const self   = this;
        const jQueryclone = self.jQueryclone;

        self.scaleBg();

        jQueryclone.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', () => {
          jQueryclone.hide();

          self.jQuerybtn.removeClass('morphing-btn_circle');
        });

        jQueryclone.removeClass('morphing-btn-clone_visible');

        // @ts-ignore
        jQuery(window).off('resize.fm');
      };

      // Init
      this.each(function() {
        // @ts-ignore
        const jQuerythis = jQuery(this);

        if ( !jQuerythis.data('') ) {
          const M = new Morphing( jQuerythis, opts );
          jQuerythis.data( '', M );
        }
      });

      return this;
    };

    // @ts-ignore
    jQuery('[data-morphing-menu]').fancyMorph({});
  }

  @HostListener('window:scroll', [ ])
  onWindowScroll() {
    // tslint:disable-next-line:variable-name
    this.scrollYValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  closeFB() {
    // @ts-ignore
    document.querySelector('button[data-fancybox-close]').click();
  }
}
