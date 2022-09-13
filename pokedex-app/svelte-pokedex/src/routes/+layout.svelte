<script>
	import 'bulma/css/bulma.min.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Navigation />
<main class="container">
	<slot />
</main>
<Footer />
