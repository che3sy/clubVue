import { ref } from "vue";
import axios from "axios";

export async function data() {
	const people = ref([]);

	const response = await axios.get(
		"https://sheets.googleapis.com/v4/spreadsheets/1KY4Htn302LepK-wK4jYyYc_4yFFLXm8in1QIjESep8c/values/Sheet1!A1:C18?key=AIzaSyB4s8eDmCCjsIzJyJUNzskhjK_LCssyMyI"
	);

	const values = response.data.values;

	people.value = values.slice(1).map((row) => ({
		name: row[0],
		grade: row[1],
		email: row[2],
	}));

	return { people };
}
