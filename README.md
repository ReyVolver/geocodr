# GEOCODR

Use google maps API to get an address from geocode or geocode from an address

##  Exemple

```html
<span class="geocode" data-lat="45.764043" data-lng="4.835658999999964"></span>
```

```javascript
$('.geocode').geocode()
 .on('geocode:address', function(el, data){
   $(el.currentTarget).html(data.formatted_address);
 });
```
Your `span` will now have the address:

```html
<span class="geocode" data-lat="45.764043" data-lng="4.835658999999964">20 Rue de la Poulaillerie, 69002 Lyon, France</span>
```
