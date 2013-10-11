
build: components index.js test-component.css lastnametemplate.js nametemplate.js
	@component build --dev

nametemplate.js: nametemplate.html
	@component convert $<

lastnametemplate.js: lastnametemplate.html
	@component convert $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
