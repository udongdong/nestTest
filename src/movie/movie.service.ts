import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { UpdateMovie } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`the movie id ${id} not found`);
    }
    return movie;
  }

  create(movieData): boolean {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });

    return true;
  }

  remove(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  update(id: number, updateData: UpdateMovie) {
    const movie = this.getOne(id);
    this.remove(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
