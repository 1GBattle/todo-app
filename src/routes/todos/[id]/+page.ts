/** @type {import('./$types').PageLoad} */
export function load({ url }) {
	return { pathname: url.pathname.split('/').pop() };
}
