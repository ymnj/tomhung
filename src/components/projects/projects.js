module.exports = {
	peregrine: {
		title: "peregrine",
		links: [
						`<a href="https://github.com/ymnj/peregrine" target="_blank"><i class="fa fa-globe" aria-hidden="true""></i></a>`,
						`<a href="http://peregrine-app.herokuapp.com" target="_blank"><i class="fa fa-github" aria-hidden="true""></i></a>`
					 ],
		screen: require('../../assets/peregrine-screen.png'),
		intro: `The initial idea behind Peregrine was a website that would connect fellow travelers together by common interests before their trip had even started. Users would be able to add details of an upcoming trip and be linked up with other travelers that had similar itineraries. They would then be able to chat with one another and perhaps plan some activities together. As part of my final project during my bootcamp, I mistakenly jumped right into the project after a designing a few wireframes and a basic ERD, but didn't spend enough time on site functionality and implementation. Therefore, any neat ideas I had during development was often implemented without understanding how it would benefit or work with current functions. Needless to say, my simple idea suddenly became not so simple. Although the main focus of Peregrine became disorganized, it gave me the chance to learn and implement several features using APIs I had never used before.`,
		frameworks: [
									`<i class="icon-ruby-on-rails" title="Ruby on Rails"></i>`,
									`<i class="icon-postgres" title="PostgreSQL"></i>`,
									`<i class="icon-html5" title="HTML5"></i>`,
									`<i class="icon-css3" title="CSS3"></i>`,
									`<i class="icon-javascript" title="Javascript"></i>`
								]
	},
	codrlogue: {
		title: "codrlogue",
		screen: require('../../assets/codrlogue-screen.png'),
		links: [
						`<a href="http://codrlogue.herokuapp.com" target="_blank"><i class="fa fa-globe" aria-hidden="true""></i></a>`,
						`<a href="https://github.com/jennli/codrlogue" target="_blank"><i class="fa fa-github" aria-hidden="true""></i></a>`
					 ],
		intro: `Codrlogue was developed over the course of three days as part of CodeCore's group project "hackathon". The goal was to build a networking service targeted at connecting employers with CodeCore students looking for employment. It was the first experience we had working on a collaborative project and the greatest challenge was working effectively as a team. As a group of 6 students, our first step was defining the scope of the project by evaluating the requirements and features expected by the client(lead instructor Tam). I really enjoy this part of the process where before any code is written, everyone in the group can discuss and present their ideas on what should go into the application and how it should be approached. Despite being a project with only 3 days of work, I was incredibly amazed at what our team was able to accomplish.`,
		frameworks: [
						`<i class="icon-ruby-on-rails" title="Ruby on Rails"></i>`,
						`<i class="icon-postgres" title="PostgreSQL"></i>`,
						`<i class="icon-html5" title="HTML5"></i>`,
						`<i class="icon-css3" title="CSS3"></i>`,
						`<i class="icon-jquery" title="jQuery"></i>`
					]
	},
	blog: {
		title: "blog",
		screen: require('../../assets/blog-screen.png'),
		links: [
						`<a href="hhttp://tomhung-blog.herokuapp.com" target="_blank"><i class="fa fa-globe" aria-hidden="true""></i></a>`,
						`<a href="https://github.com/ymnj/rails-blog" target="_blank"><i class="fa fa-github" aria-hidden="true""></i></a>`
					 ],
		intro: `Developing this blog was my introduction to the Rails framework and the MVC design pattern. It was an ongoing project throughout the bootcamp and was built overtime as I learned more about the concepts and languages that go into a web application. While this sort of project is fairly basic and non-complex, the experience allowed me to understand the RESTful style of building web applications as well standard CRUD functions for dealing with the postgreSQL database. Throughout the process, I was able to implement multiple models with 1:M or M:N relationships and integrate them with my controllers and views. I was also able to experiment with numerous Rails gems that provided useful functions such as CanCanCan for authorization or friend_id for URL slugs to name a few.`,
		frameworks: [
									`<i class="icon-ruby-on-rails" title="Ruby on Rails"></i>`,
									`<i class="icon-postgres" title="PostgreSQL"></i>`,
									`<i class="icon-html5" title="HTML5"></i>`,
									`<i class="icon-css3" title="CSS3"></i>`,
									`<i class="icon-bootstrap" title="Bootstrap"></i>`
								]
	}
}