Page({
  data:{
        src:'../images/a.jpg',
    
    btna:'active',
    btnb: 'inactive',
    btnc: 'inactive',
    btnd: 'inactive',
    btne: 'inactive', 
    btnf: 'inactive',
    btng: 'inactive'

       },
   a:function(){
         this.setData({
           src: '../images/a.jpg',
           btna: 'active',
           btnb: 'inactive',
           btnc: 'inactive',
           btnd: 'inactive',
           btne: 'inactive',
           btnf: 'inactive',
           btng: 'inactive'
         })
       },

  b: function () {
    this.setData({
      src: '../images/b.jpg',
      btna: 'inactive',
      btnb: 'active',
      btnc: 'inactive',
      btnd: 'inactive',
      btne: 'inactive',
      btnf: 'inactive',
      btng: 'inactive'
    })
  },

  c: function () {
    this.setData({
      src: '../images/c.jpg',
      btna: 'inactive',
      btnb: 'inactive',
      btnc: 'active',
      btnd: 'inactive',
      btne: 'inactive',
      btnf: 'inactive',
      btng: 'inactive'
    })
  },

  d: function () {
    this.setData({
      src: '../images/d.jpg',
      btna: 'inactive',
      btnb: 'inactive',
      btnc: 'inactive',
      btnd: 'active',
      btne: 'inactive',
      btnf: 'inactive',
      btng: 'inactive'
    })
  },

  e: function () {
    this.setData({
      src: '../images/e.jpg',
      btna: 'inactive',
      btnb: 'inactive',
      btnc: 'inactive',
      btnd: 'inactive',
      btne: 'active',
      btnf: 'inactive',
      btng: 'inactive'
    })
  },

  f: function () {
    this.setData({
      src: '../images/f.jpg',
      btna: 'inactive',
      btnb: 'inactive',
      btnc: 'inactive',
      btnd: 'inactive',
      btne: 'inactive',
      btnf: 'active',
      btng: 'inactive'
    })
  },

  g: function () {
    this.setData({
      src: '../images/g.jpg',
      btna: 'inactive',
      btnb: 'inactive',
      btnc: 'inactive',
      btnd: 'inactive',
      btne: 'inactive',
      btnf: 'inactive',
      btng: 'active'
    })
  }

})