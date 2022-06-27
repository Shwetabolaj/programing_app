// Copyright (c) 2022, S-code and contributors
// For license information, please see license.txt

frappe.ui.form.on('Parent Doc', {
	// refresh: function(frm) {
	//	frappe.msgprint(__("Hello world from 'refresh' event"))
	//},
    //	onload: function(frm) {
	//	frappe.msgprint(__("Hello world from 'Onload' event"))
	//}
	 //	validate: function(frm) {
		//frappe.throw(__("Hello world from 'validate' event"))
	//}
	//before_save: function(frm) {
//		frappe.throw(__("Hello world from 'before save not save' event"))
//	},
	//after_save: function(frm) {
	//	frappe.throw(__("Hello world from 'before save ' event"))
	//}
	//after_save: function(frm) {
	//	frappe.throw(__("Hello world from 'before save ' event"))
	//}
	//enable: function(frm) {
	//	frappe.throw(__("Hello world from 'enable' event enable is field name"))
	//}
	//age: function(frm) {
	//	frappe.throw(__("Hello world from 'age' event age is field name" ))
	//}
	//before_submit: function(frm) {
	//	frappe.throw(__("Hello world from before_submit event " ))
	//}
	//on_submit: function(frm) {
	//	frappe.throw(__("Hello world from on_submit event " ))
	//}
	//after_cancel: function(frm) {
	//	frappe.throw(__("Hello world from cancel event " ))
	//}

	//after_save:function(frm){
	//	frappe.msgprint(__("The age is {0}",[frm.doc.age]))
	//}
     //after_save:function(frm){
    //    frappe.msgprint({
     //   title:__("Notification"),indicator:'red',message:__('Hii..')
	//}
	//);
	//}
	//refresh:function(frm){
	//if(	frm.is_new())
	//	{
	//frm.set_intro('Now you can create a parent doctype')
	//	}
	//}

	//validate:function(frm){
	//frm.set_value('full_name',frm.doc.first_name+" " + frm.doc.last_name)
	//}

	//refresh:function(frm){
	//	if(frm.is_new()){
	//		let d = new frappe.ui.Dialog({
	//			title:'Enter paren doc details',
	//			fields:[{
	//				label:'First Name',
	//				fieldname:'first_name',
	//				fieldtype:'Data'
	//			},
	//			{
	//				label:'Last Name',
	//				fieldname:'last_name',
	//				fieldtype:'Data'
	//			},
	//			{
	//			label:'Age',
	//				fieldname:'age',
	//				fieldtype:'Data'
	//			}			
	//		],
	//		primary_action_label:'submit',
	//		primary_action(values){
	//			frm.set_value('first_name',values.first_name),
	//			frm.set_value('last_name',values.last_name),
	//			frm.set_value('age',values.age)
	//			d.hide()
	//		}
	//		}
	//		);
	//		d.show();
	//	}
	//},

	//enable:function(frm){
	//	if(frm.is_dirty()){
	//		frappe.msgprint(__('Please save the document'))
	//	}
	//}

	//refresh:function(frm){
	//	frm.add_custom_button('Click me1',() =>{
	//		frappe.msgprint(__('You click1!!'));
	//	},'click')
	//	frm.add_custom_button('Click me2',() =>{
	//		frappe.msgprint(__('You click2!!'));
	//	},'click')
	//}
    //give common name after , for dropdown buttons

		//refresh:function(frm){
		//	if(!frm.is_new()){
		//		frm.trigger('enable');//you write here which event is called
		//	}
		//},
		//enable:function(frm){
		//	frappe.msgprint(__('Triggered event!!'));
		//}

		//refresh:function(frm){
		//	if(!frm.is_new()){
		//		frm.trigger('test_fun');//you write here which event is called
		//	}
		//},
		//test_fun(frm){
		//	frappe.msgprint(__('Triggered  function!!'));
	//	}



		//enable:function(frm){
		//	let row=frm.add_child('date_and_values',{
		//		date:frappe.datetime.get_today(),
		//		value_1:10,
		//		value_2:20,
		//	})
		//	frm.refresh_field('date_and_values')
		//}

		

});
