var config = {
    'map': {
        '*': {
        'Magento_Tax/template/checkout/shipping_method/price.html':
            'AraujoPhillips_FreeShippingLabel/template/checkout/shipping_method/price.html'
        }
    },
	'config': {
		'mixins': {
			'Magento_Tax/js/view/checkout/shipping_method/price': {
				'AraujoPhillips_FreeShippingLabel/js/view/checkout/shipping_method/price-mixin': true
			},
		}
	}
};
