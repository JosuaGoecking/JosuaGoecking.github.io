( function( $ ) {

	// Add upgrade link
	upgrade = $( '<a class="graphy-upgrade-link"></a>' )
			.attr( 'href', graphy_customizer_links.url )
			.attr( 'target', '_blank' )
			.text( graphy_customizer_links.label );
	$( '.preview-notice' ).append( upgrade );

} )( jQuery );