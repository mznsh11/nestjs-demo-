import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PublishersService {
  private publishers = [
    { 
      id: 1, 
      name: 'Publisher One'
    },
    { 
      id: 2, 
      name: 'Publisher Two' 
    },
    { 
      id: 3, 
      name: 'Publisher Three' 
    },
  ];

  findAll() {
    return this.publishers;
  }

  findOne(id: number) {
    const publisher = this.publishers.find(p => p.id === id);
    if (!publisher) {
      throw new NotFoundException(`Publisher with ID ${id} not found`);
    }
    return publisher;
  }

  create(publisher: { name: string }) {
    const newPublisher = {
      id:
        this.publishers.length > 0
          ? Math.max(...this.publishers.map(p => p.id)) + 1
          : 1,
      ...publisher,
    };
    this.publishers.push(newPublisher);
    return newPublisher;  
  }

  update(id: number, publisher: { name?: string }) {
    const index = this.publishers.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Publisher with ID ${id} not found`);
    }
    this.publishers[index] = { ...this.publishers[index], ...publisher };
    return this.publishers[index];
  }

  delete(id: number) {
    const index = this.publishers.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Publisher with ID ${id} not found`);
    }
    const deletedPublisher = this.publishers.splice(index, 1);
    return deletedPublisher[0];
  }
}
