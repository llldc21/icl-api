class EmailAlredyExists extends Error {
  statusCode: number;

  constructor(email: string) {
    super(`O email: ${email} já está sendo utilizado.`);
    this.statusCode = 400;
  }
}

export default EmailAlredyExists;
