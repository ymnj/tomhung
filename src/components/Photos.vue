<template>
	<div>
		<h1>This is Photos</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatibus commodi asperiores maxime pariatur dolore at fugiat 
		voluptatem repellendus ad. Porro odio sunt ipsa incidunt vel, ipsum amet animi sint.</p>
		<div v-html="obj"></div>
	</div>
</template>

<script>
import cloudinary from 'cloudinary';
import config from '../config/cloudinary.json';
import axios from 'axios';

cloudinary.config({
  "cloud_name": config.NAME,
  "api_key": config.KEY,
  "api_secret": config.SECRET
});

//cloudinary.url("asia", {format: "json", type: "list" })


// console.log(cloudinary)

export default {
	data() {
		return {
			img: cloudinary.image("asia/050611_087.jpg", { folder: 'asia/'}),
			obj: ""
		}
	},
	methods: {
		getImg() {

			let url = cloudinary.url('asia', {format: 'json', type: 'list'});;
			console.log(url);

			axios.get('http://res.cloudinary.com/tomhung/image/list/asia.json')
				.then((res) => {
					console.log(res);
					this.obj = cloudinary.image("asia/050611_087.jpg", { quality: 70 });
					console.log(res.data.resources[0]);
				}).catch((err) => {
					console.log(err)
				})
		}
	},
	mounted() {
		this.getImg();
	}
}

// {
//     "resources": [
//         {
//             "public_id": "asia/050611_087",
//             "version": 1485860097,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:57Z"
//         },
//         {
//             "public_id": "asia/Taiwan_050611_147",
//             "version": 1485860097,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:57Z"
//         },
//         {
//             "public_id": "asia/052910_048",
//             "version": 1485860096,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:56Z"
//         },
//         {
//             "public_id": "asia/052910_053",
//             "version": 1485860096,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:56Z"
//         },
//         {
//             "public_id": "asia/052910_085",
//             "version": 1485860096,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:56Z"
//         },
//         {
//             "public_id": "asia/Taiwan_050611_162",
//             "version": 1485860095,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:55Z"
//         },
//         {
//             "public_id": "asia/Taiwan_050611_169",
//             "version": 1485860095,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:55Z"
//         },
//         {
//             "public_id": "asia/Taiwan_050611_067",
//             "version": 1485860095,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:55Z"
//         },
//         {
//             "public_id": "asia/Taiwan_050611_077",
//             "version": 1485860095,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:55Z"
//         },
//         {
//             "public_id": "asia/052910_076",
//             "version": 1485860095,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:55Z"
//         },
//         {
//             "public_id": "asia/061010_104",
//             "version": 1485860094,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:54Z"
//         },
//         {
//             "public_id": "asia/052910_056",
//             "version": 1485860094,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:54Z"
//         },
//         {
//             "public_id": "asia/061010_111",
//             "version": 1485860094,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:54Z"
//         },
//         {
//             "public_id": "asia/052910_054",
//             "version": 1485860095,
//             "format": "jpg",
//             "width": 1000,
//             "height": 669,
//             "type": "upload",
//             "created_at": "2017-01-31T10:54:55Z"
//         }
//     ],
//     "updated_at": "2017-02-01T19:51:05Z"
// }

</script>