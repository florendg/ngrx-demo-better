import { createComponentFactory, type Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    imports: [
      RouterModule
    ],
    component: AppComponent
  }
  );

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should have the proper title', () => {
    expect(spectator.component.title).toBe('ngrx-demo');
  });
});
