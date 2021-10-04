jQuery(document).ready(function($) {
	$('.edd_subscription_cancel').on('click',function(e) {
		if( confirm( edd_recurring_vars.confirm_cancel ) ) {
			return true;
		}
		return false;
	});

	// Force subscription terms to behave for Custom Prices
	$('.edd_download_purchase_form').each(function() {

		var form = $(this);

		if ( form.find( '.edd-cp-container' ).length && form.find( '.edd_price_options' ).length ) {

			var terms = form.find('.eddr-custom-terms-notice');
			var signup_fee = form.find('.eddr-custom-signup-fee-notice');
			terms.prev().append(terms);
			signup_fee.prev().append(signup_fee);
			terms.show();
			signup_fee.show();

		} else if ( form.find( '.edd-cp-container' ).length ) {

			form.find('.edd_cp_price').keyup(function() {
				form.find('.eddr-terms-notice,.eddr-signup-fee-notice').hide();
				form.find('.eddr-custom-terms-notice,.eddr-custom-signup-fee-notice').show();
			});

		}

	});


});