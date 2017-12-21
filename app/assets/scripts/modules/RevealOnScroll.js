import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor() {
		this.itemsToReveal = $('.feature-item, .testimonial');
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
	}

	createWaypoints(){
		this.itemsToReveal.each(function() {
			var currenItem = this;
			new Waypoint({
				element: currenItem,
				handler: function(){
					$(currenItem).addClass('reveal-item--is-visible');
				},
				offset:'85%'
			});
		});
	}

}

export default RevealOnScroll;