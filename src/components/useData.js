import { ref } from "vue";
import axios from "axios";

export async function data() {
	const people = ref([]);

	const response = await axios.get(
		"API KEY"
	);

	const values = response.data.values;

	people.value = values.slice(1).map((row) => ({
		name: row[0],
		grade: row[1],
		email: row[2],
	}));

	return { people };
}
