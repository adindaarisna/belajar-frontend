// mdc.textField.MDCTextField.attachTo(document.querySelectorAll('.mdc-text-field'));
const edtTexts = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
  return new mdc.textField.MDCTextField(el);
});

var tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));