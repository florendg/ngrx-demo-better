import {createComponentFactory, Spectator} from "@ngneat/spectator";
import {AppComponent} from "./app.component";


describe('AppComponent', () => {

  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory(AppComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should have the proper title',() => {
    expect(spectator.component.title).toBe('ngrx-demo');
  });
})

