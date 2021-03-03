export class UseCase {
  static create () {
    throw new Error('[UseCase.create] should be implemented')
  }

  execute () {
    throw new Error('[UseCase#execute] should be implemented')
  }
}

export class Service {
  static create () {
    throw new Error('[Service.create] should be implemented')
  }

  execute () {
    throw new Error('[Service#execute] should be implemented')
  }
}

export class Repository {
  static create () {
    throw new Error('[Repository.create] should be implemented')
  }
}

export class Model {
  static create () {
    throw new Error('[Model.create] should be implemented')
  }

  toJSON () {
    throw new Error('[Model#toJSON] should be implemented')
  }
}
