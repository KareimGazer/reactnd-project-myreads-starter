(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),r=a(20),s=a.n(r),i=a(4),c=a(5),l=a(7),u=a(6),h=a(8),d=a(2),p=a.n(d),f=a(17),k="https://reactnd-books-api.udacity.com",m=localStorage.token;m||(m=localStorage.token=Math.random().toString(36).substr(-8));var b={Accept:"application/json",Authorization:m},v=function(e){return fetch("".concat(k,"/books/").concat(e),{headers:b}).then(function(e){return e.json()}).then(function(e){return e.book})},y=function(){return fetch("".concat(k,"/books"),{headers:b}).then(function(e){return e.json()}).then(function(e){return e.books})},E=function(e){return fetch("".concat(k,"/search"),{method:"POST",headers:Object(f.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:190,backgroundImage:"url(".concat(this.props.coverUrl,")")}}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{value:this.props.shelf,onChange:function(t){var a,o;a={id:e.props.id,shelf:e.props.shelf},o=t.target.value,fetch("".concat(k,"/books/").concat(a.id),{method:"PUT",headers:Object(f.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:o})}).then(function(e){return e.json()}),e.props.updateBook(e.props.id,t.target.value)}},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title"},this.props.title),n.a.createElement("div",{className:"book-authors"},null!=this.props.authors&&this.props.authors.map(function(t){return n.a.createElement("div",{key:e.props.authors.indexOf(t)},t)})))}}]),t}(o.Component);j.prototypes={coverUrl:p.a.string.isRequired,title:p.a.string.isRequired,authors:p.a.array.isRequired,id:p.a.string.isRequired,updateBook:p.a.func.isRequired};var g=j,O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},this.props.shelf),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.booksList.map(function(t){return n.a.createElement("li",{key:t.id},n.a.createElement(g,{coverUrl:null!=t.imageLinks?t.imageLinks.smallThumbnail:"",title:t.title,authors:t.authors,id:t.id,shelf:t.shelf,updateBook:e.props.updateBook}))}))))}}]),t}(o.Component);O.prototypes={key:p.a.string.isRequired,shelf:p.a.string.isRequired,booksList:p.a.array.isRequired,updateBook:p.a.func.isRequired};var B=O,N=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,this.props.shelves.map(function(t){return n.a.createElement(B,{key:t.id,shelf:t.shelf,booksList:t.booksList,updateBook:e.props.updateBook})})))}}]),t}(o.Component);N.prototypes={updateBook:p.a.func.isRequired,shelves:p.a.array.isRequired};var R=N,S=(a(29),a(12)),L=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"open-search"},n.a.createElement(S.b,{to:"/search",className:"open-search-link"},"Add a book"))}}]),t}(o.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads"))}}]),t}(o.Component),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={booksList:[],query:"",booksDictionary:{}},a.searchBooks=function(e){""!==e?E(e).then(function(e){Array.isArray(e)?a.setState({booksList:e}):a.setState({booksList:[]})}).catch(function(){console.log("rejected")}):a.setState({booksList:[]});var t=a.props.getBooksMap();a.setState({booksDictionary:t})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(S.b,{className:"close-search",to:"/"},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.query,onChange:function(t){e.setState({query:t.target.value}),e.searchBooks(t.target.value)}}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"},console.log(this.state.booksList),this.state.booksList.map(function(t){return n.a.createElement("li",{key:t.id},n.a.createElement(g,{coverUrl:null!=t.imageLinks?t.imageLinks.smallThumbnail:"",title:t.title,authors:t.authors,id:t.id,shelf:e.state.booksDictionary[t.id]?e.state.booksDictionary[t.id]:"none",updateBook:e.props.addBook}))}))))}}]),t}(o.Component);C.prototypes={addBook:p.a.func.isRequired};var w=C,U=a(0),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={shelves:[],categories:["Currently Reading","Want to Read","Read"],allBooks:[]},a.setUpShelves=function(){a.setState(function(e){return{shelves:[{id:0,shelf:"Currently Reading",booksList:e.allBooks.filter(function(e){return"currentlyReading"===e.shelf})},{id:1,shelf:"Want to Read",booksList:e.allBooks.filter(function(e){return"wantToRead"===e.shelf})},{id:2,shelf:"Read",booksList:e.allBooks.filter(function(e){return"read"===e.shelf})}]}})},a.getBooksMap=function(){var e={};return a.state.allBooks.map(function(t){return e[t.id]=t.shelf}),e},a.getNewBooks=function(){y().then(function(e){a.setState({allBooks:e}),a.setUpShelves()})},a.updateBook=function(e,t){a.setState(function(a){for(var o=a.allBooks,n=0;n<o.length;n++)o[n].id===e&&(o[n].shelf=t);return{allBooks:o}}),a.setUpShelves()},a.addBook=function(e,t){v(e).then(function(e){a.setState(function(a){var o=a.allBooks;return e.shelf=t,o.push(e),{allBooks:o}}),a.setUpShelves()})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getNewBooks()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"app"},n.a.createElement(U.a,{exact:!0,path:"/",render:function(){return n.a.createElement("div",{className:"list-books"},n.a.createElement(q,null),n.a.createElement(R,{shelves:e.state.shelves,updateBook:e.updateBook}),n.a.createElement(L,null))}}),n.a.createElement(U.a,{exact:!0,path:"/search",render:function(){return n.a.createElement(w,{addBook:e.addBook,getBooksMap:e.getBooksMap})}}))}}]),t}(n.a.Component);a(34);s.a.render(n.a.createElement(S.a,null,n.a.createElement(M,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.ddb41f19.chunk.js.map