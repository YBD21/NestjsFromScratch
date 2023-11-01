import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  // {
  //     "12": {
  //       "content": "hello",
  //       "id": 12
  //     }
  //   }
  private filePath: string = 'message.json';

  async findOne(id: string) {
    const contents = await readFile(this.filePath, 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile(this.filePath, 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string) {
    const contents = await readFile(this.filePath, 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999); // generate random id
    messages[id] = { id, content };

    await writeFile(this.filePath, JSON.stringify(messages));
  }
}
