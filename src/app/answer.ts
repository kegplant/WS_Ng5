export class Answer {
    Answer: String;
    created_at: String;
    "Question-Id": String;
    constructor(
        public upvotes="",
        public downvotes="",
    ){}
}
