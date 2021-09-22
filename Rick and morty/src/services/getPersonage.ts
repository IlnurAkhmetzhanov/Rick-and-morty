export const getPersonages = async (name: string | null, status: string | null, gender: string | null,currentPage:number|null) => {
    debugger
    try {
        const rawResponse = await fetch(`https://rickandmortyapi.com/api/character/?${currentPage ? `page=${currentPage}` : ""}&name=${name}&${status ? `status=${status}` : ""}&${gender ? `gender=${gender}` : ""}
`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        debugger
        if (rawResponse.ok) {
            const response = await rawResponse.json();
            debugger
            return response;
        }
        return false;
    }
 catch {
        return false;
    }
};