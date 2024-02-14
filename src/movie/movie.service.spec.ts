import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';
import { NotFoundException } from '@nestjs/common';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should be Array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
      expect(result).toEqual([]);
    });
  });

  describe('getOne', () => {
    it('should return movie', () => {
      service.create({
        title: 'test',
        year: 2024,
        gernes: ['test'],
      });

      const result = service.getOne(1);
      expect(result).toBeDefined();
    });

    it('should return 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('the movie id 999 not found');
      }
    });
  });
});
