<template>
  <header class="header-main">
    <div class="o-container">
      <div class="header-main__nav o-flex o-flex--center">
        <router-link to="/" class="header-main__logo">
          <svg width="58" height="58" fill="none"><g clip-path="url(#a)"><mask id="b" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="54" height="37"><path d="m2.212 2.513 27.162 13.639L55.787 2.513V38.48H2.212V2.513Z" fill="#D9D9D9"/></mask><g mask="url(#b)"><path d="M52.88-8.635 29.559-20.343a.982.982 0 0 0-.879 0L5.19-8.634a5.25 5.25 0 0 0-2.924 4.726V24.6a.983.983 0 0 0 .543.879l6.445 3.224a.96.96 0 0 0 .1.035.677.677 0 0 0 .262.058c.027.002.052.01.078.01l.014-.002a.963.963 0 0 0 .387-.092c.012-.005.026-.003.038-.009l6.445-3.224a.982.982 0 0 0 .543-.879v-4.86l4.48 2.243v12.29a.982.982 0 0 0 .543.878l6.445 3.225a.984.984 0 0 0 .879 0l6.445-3.225a.982.982 0 0 0 .543-.878v-12.29l4.48-2.242v4.86a.982.982 0 0 0 .544.878l6.445 3.224c.012.006.025.004.037.01a.967.967 0 0 0 .388.09l.013.004c.026 0 .051-.009.078-.01a.967.967 0 0 0 .158-.022l.204-.072 6.445-3.224a.983.983 0 0 0 .543-.878V-3.915a5.252 5.252 0 0 0-2.911-4.72ZM15.156 19.226v4.767l-4.48 2.242v-9.719l4.581 2.293a.965.965 0 0 0-.1.418Zm13.382 16.927-4.972-2.487v-12.29a.982.982 0 0 0-.543-.879l-12.89-6.449a.982.982 0 0 0-1.422.879v11.308l-4.48-2.242V5.769l24.306 12.16v18.224Zm0-26.63v6.21L4.23 3.573v-7.48a3.298 3.298 0 0 1 1.837-2.97l23.05-11.49L51.998-6.88c.49.247.91.612 1.223 1.061L31.184 5.24a4.763 4.763 0 0 0-2.646 4.284Zm18.844 16.712L42.9 23.993v-5.235l4.48-2.242v9.72Zm6.445-2.242-4.481 2.242V14.927a.983.983 0 0 0-1.421-.879l-12.89 6.45a.983.983 0 0 0-.543.878v12.29l-4.397 2.487V17.93L53.827 5.769v18.224Zm0-20.42-23.732 12.16v-5.52a3.786 3.786 0 0 1 2.104-3.405L53.661-4.364c.108.33.164.676.166 1.024v6.912Z" fill="#088395"/></g><path d="M0 55.515V42.028h.018l6.941 9.836-.827-.18 6.906-9.656h.036v13.487h-1.907v-9.153l.126.989-4.82 6.815h-.035l-4.91-6.815.324-.9v9.064H0ZM16.736 42.46h8.578v1.852H18.66v3.722h5.917v1.852H18.66v3.777h6.906v1.852h-8.83V42.459ZM28.52 42.46h1.924v11.203h6.528v1.852H28.52V42.459ZM37.349 42.46h8.703v1.852h-3.434v11.203h-1.925V44.312H37.35v-1.853ZM46.419 55.515l5.737-13.577h.107L58 55.515h-2.194L51.634 44.94l1.385-.917-4.712 11.49H46.42Zm3.489-4.892h4.64l.665 1.655h-5.88l.575-1.654Z" fill="#141C1D"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h58v58H0z"/></clipPath></defs></svg>
        </router-link>
        <ul class="o-flex o-flex--center mb0">
          <li><router-link to="/" class="nav__link">Home</router-link></li>
          <li><router-link to="/product" class="nav__link">Product</router-link></li>
        </ul>
      </div>
      <nav class="o-flex o-flex--center nav">
        <a href="#" class="nav__link">
          <svg width="24" height="24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 11.5a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0Zm8.75 10.25c-5.66 0-10.25-4.59-10.25-10.25S5.84 1.25 11.5 1.25 21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75Z" fill="#141C1D"/></svg>
        </a>
        <a href="#" class="nav__link">
          <svg width="22" height="20" fill="none"><path d="M11.765 2.702 11 3.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z" stroke="#141C1D" stroke-width="1.5" stroke-linejoin="round"/></svg>
        </a>
        <a href="javascript:;" class="nav__link cart" @click="showAsideCart"> 
          <svg width="24" height="24" fill="none"><path d="M11 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" stroke="#28303F" stroke-width="1.5"/><path d="M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Zm0 0a2 2 0 0 0-2-2H2m4 6h15.5" stroke="#28303F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
		  <span>{{products.length}}</span>
        </a>
        <router-link to="/login" class="button button--primary">
			Login
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import {  mapGetters } from "vuex";
export default {
	name:"Header",
	emits: ['showAsideCart'],
	data() {
        return {
        }
    },

	computed: {
		 ...mapGetters({
            products: 'payment/products',
        }),
	},
	
	methods: {

		showAsideCart() {
			this.$emit('showAsideCart', true)
		}
	}
}
</script>

<style lang="scss" scoped>
  
.header-main {
	height: 100px;
	display: flex;
	align-items: center;
	position: absolute;
	z-index: 999;
	left: 0;
	top: 0;
	width: 100%;
	

	.o-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}

.header-main__logo {
  margin-right: 100px;
}

.header-main__nav {

  ul {
	gap: 30px;
  }
}

.nav {
	gap: 20px;
}

.header-main__bars {
	font-size: 30px;
	color: #000;
	display: none;
	
	@media (max-width: 992px) {
		display: block;
	}
}

.header-nav {
	@media (max-width: 992px) {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		padding: 20px;
		background-color: #fff;
		visibility: hidden;
		opacity: 0;
		transition: all .3s ease;
		
		&.active {
			visibility: visible;
			opacity: 1;
		}
	}
}

.nav__list {
	margin-bottom: 0;
	
	@media (max-width: 992px) {
		display: block;
	}
}

.nav__list-item {
	
	& + .nav__list-item {
		margin-left: 20px;
		
		@media (max-width: 992px) {
			margin-left: 0;
			margin-top: 10px;
		}
	}
}

.nav__link {
	font-size: 20px;
	color: #000;
	text-decoration: none;
  display: block;
}

.bars {
	display: none;
	width: 25px;
	height: 20px;
	margin-top: 2px;
	position: relative;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: .5s ease-in-out;
	-moz-transition: .5s ease-in-out;
	-o-transition: .5s ease-in-out;
	transition: .5s ease-in-out;
	cursor: pointer;

	&:hover,
	&:focus {
		color: #1587FB;
	}

	span { 
	  display: block;
	  position: absolute;
	  height: 3px;
	  width: 100%;
	  background: #1587FB;
	  border-radius: 2px;
	  opacity: 1;
	  left: 0;
	  -webkit-transform: rotate(0deg);
	  -moz-transform: rotate(0deg);
	  -o-transform: rotate(0deg);
	  transform: rotate(0deg);
	  -webkit-transition: .25s ease-in-out;
	  -moz-transition: .25s ease-in-out;
	  -o-transition: .25s ease-in-out;
	  transition: .25s ease-in-out;
	}


	span:nth-child(1) {
	  top: 0px;
	}

	span:nth-child(2),span:nth-child(3) {
	  top: 8px;
	}

	span:nth-child(4) {
	  top: 16px;
	}

	&.active span:nth-child(1) {
	  top: 10px;
	  width: 0%;
	  left: 50%;
	}

	&.active span:nth-child(2) {
	  -webkit-transform: rotate(45deg);
	  -moz-transform: rotate(45deg);
	  -o-transform: rotate(45deg);
	  transform: rotate(45deg);
	}

	&.active span:nth-child(3) {
	  -webkit-transform: rotate(-45deg);
	  -moz-transform: rotate(-45deg);
	  -o-transform: rotate(-45deg);
	  transform: rotate(-45deg);
	}

	&.active span:nth-child(4) {
	  top: 10px;
	  width: 0%;
	  left: 50%;
	}

	@media (max-width: 992px) {
		display: block;
	}
}

.cart {
	position: relative;

	span {
		height: 16px;
		padding: 2px 5px 0;
		background-color: #088395;
		color: #fff;
		font-size: 11px;
		font-weight: 700; 
		display: flex;
		align-items: center;
		position: absolute;
		left: 100%;
		bottom: 100%;
		border-radius: 8px;
		transform: translate(-10px, 10px)
	}
}
</style>