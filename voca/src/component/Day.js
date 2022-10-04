import data from "../db/data.json"

export default function Day() {
    const day = 1;
    const wordList = data.words.filter(word => (word.day === day))
    return (
        <>
        <table>
            <tbody>
            {wordList.map(word=>(
                <tr key={word.id}>
                    <td>{word.eng}</td>
                    <td>{word.kor}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    )
}