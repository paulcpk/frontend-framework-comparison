<script>
	import 'bulma/css/bulma.min.css';
	import '../styles/globals.css';
	import Navigation from '../components/Navigation.svelte';
</script>

<Navigation />
<main>
	<h1>I'm the main layout</h1>
	<slot />
</main>
