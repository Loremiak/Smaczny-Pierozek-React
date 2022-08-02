import React from 'react';

export const Header = () => {
	return (
		<section className='welcome-sec'>
			<div className='welcome-div'>
				<h1>Najsmaczniejsze pierogi w mieście! (niektórzy twierdzą że na świecie ;))</h1>
				<p>Nie wierzysz?! Zamów już teraz!</p>
				<a href='#oferta'>
					<button href='#oferta'>oferta</button>
				</a>
			</div>
		</section>
	);
};
